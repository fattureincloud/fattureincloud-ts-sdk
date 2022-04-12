import Expression from "./Expression";
import {Operator} from "./operator";
/**
 * The Condition filter module.
 * @module Condition
 */
export default class Condition implements Expression {
    /**
     * The field to compare.
     * @member {String} field
     */
    field: string

    /**
     * The operator to use.
     * @member {Operator} operator
     */
    operator: Operator

    /**
     * The value to compare.
     * @member {string|number|boolean} value
     */
    value: string | number | boolean

    /**
     * Constructs a new <code>Condition</code>.
     * @param {string} field The field to compare.
     * @param {Operator} operator The operator to use.
     * @param {string|number|boolean} value The value to compare.
     */
    constructor(field: string, operator: Operator, value: string | number | boolean) {
        this.field = field
        this.operator = operator
        this.value = value
    }

    /**
     * Builds the query from the condition.
     * @return {String} The query.
     */
    buildQuery(): string {
        if (this.field == undefined || this.field == null || this.field == '') {
            throw 'cannot build query with an empty field'
        }
        if (this.operator == undefined || this.operator == null) {
            throw 'cannot build query with an empty operator'
        }
        if (this.value == null) {
            return `${this.field} ${this.operator} null`
        }
        if (typeof this.value == 'string') {
            return `${this.field} ${this.operator} '${this.value}'`
        }
        else {
            return `${this.field} ${this.operator} ${this.value}`
        }
    }

    /**
     * Builds the query from the condition.
     * @return {String} The query.
     */
    toString(): string {
        return this.buildQuery();
    }

}