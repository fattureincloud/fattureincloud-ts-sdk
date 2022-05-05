import { Condition } from "./condition"
import { Conjunction } from "./conjunction"
import { Disjunction } from "./disjunction"
import { Expression } from "./expression"
import { Operator } from "./operator"


/**
 * The Filter filter module.
 * @module Filter
 */
export class Filter {
    /**
     * The expression.
     * @member {Expression} expression
     */
    expression: Expression = null

    /**
     * Constructs a new <code>Filter</code>.
     * @param {Expression} expression The expression.
     */
    constructor(expression: Expression = null) {
        this.expression = expression
    }

    /**
     * Initializes a new instance of the Filter class with a Condition.
     * @param {String} field The field to compare.
     * @param {Operator} operator The operator to use.
     * @param {String|Number|Boolean} value The value to compare.
     */
    where(field: string, operator: Operator, value: string | number | boolean) {
        this.expression = new Condition(field, operator, value)
        return this
    }

    /**
     * Initializes a new instance of the Filter class with an Expression.
     * @param {filter/Expression} expression The expression.
     */
    whereExpression(expression: Expression) {
        this.expression = expression
        return this
    }

    /**
     * Adds an AND condition to the filter.
     * @param {String} field The field to compare.
     * @param {Operator} operator The operator to use.
     * @param {String|Number|Boolean} value The value to compare.
     */
    and(field: string, operator: Operator, value: string | number | boolean) {
        if (this.expression == null) {
            throw 'Cannot create a conjunction with an empty expression.'
        }
        var left = this.expression
        var right = new Condition(field, operator, value)
        this.expression = new Conjunction(left, right)
        return this
    }

    /**
     * Adds an AND expression to the filter.
     * @param {Expression} expression The expression.
     */
    andExpression(expression: Expression) {
        if (this.expression == null || expression == null || expression == undefined) {
            throw 'Cannot create a conjunction with an empty expression.'
        }
        var left = this.expression
        var right = expression
        this.expression = new Conjunction(left, right)
        return this
    }

    /**
     * Adds an AND filter to the filter.
     * @param {Filter} filter The filter.
     */
    andFilter(filter: Filter) {
        if (this.expression == null || filter?.expression == null || filter?.expression == undefined) {
            throw 'Cannot create a conjunction with an empty expression.'
        }
        var left = this.expression
        var right = filter.expression
        this.expression = new Conjunction(left, right)
        return this
    }

    /**
     * Adds an OR condition to the filter.
     * @param {String} field The field to compare.
     * @param {Operator} operator The operator to use.
     * @param {String|Number|Boolean} value The value to compare.
     */
    or(field: string, operator: Operator, value: string | number | boolean) {
        if (this.expression == null) {
            throw 'Cannot create a disjunction with an empty expression.'
        }
        var left = this.expression
        var right = new Condition(field, operator, value)
        this.expression = new Disjunction(left, right)
        return this
    }

    /**
     * Adds an OR expression to the filter.
     * @param {Expression} expression The expression.
     */
    orExpression(expression: Expression) {
        if (this.expression == null || expression == null || expression == undefined) {
            throw 'Cannot create a disjunction with an empty expression.'
        }
        var left = this.expression
        var right = expression
        this.expression = new Disjunction(left, right)
        return this
    }

    /**
     * Adds an OR filter to the filter.
     * @param {Filter} filter The filter.
     */
    orFilter(filter: Filter) {
        if (this.expression == null || filter?.expression == null || filter?.expression == undefined) {
            throw 'Cannot create a disjunction with an empty expression.'
        }
        var left = this.expression
        var right = filter.expression
        this.expression = new Disjunction(left, right)
        return this
    }

    /**
     * Builds the query from the Filter.
     * @return {String} The query.
     */
    buildQuery(): string {
        if (this.expression == null) {
            return ''
        }
        return this.expression.buildQuery()
    }

    /**
     * Builds the query from the Filter.
     * @return {String} The query.
     */
    toString(): string {
        return this.buildQuery()
    }

    /**
     * Builds the url encodedquery from the Filter.
     * @return {String} The url encoded query.
     */
    buildUrlEncodedQuery(): string {
        return encodeURI(this.buildQuery())
    }
}