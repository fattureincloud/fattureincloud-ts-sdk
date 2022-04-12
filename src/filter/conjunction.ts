import Expression from "./Expression";
/**
 * The Conjunction filter module.
 * @module Conjunction
 */
export default class Conjunction implements Expression {
    /**
     * The left expression.
     * @member {Expression} left
     */
    left: Expression

    /**
     * The right expression.
     * @member {Expression} right
     */
    right: Expression

    /**
     * Constructs a new <code>Conjunction</code>.
     * @param {Expression} left The left expression.
     * @param {Expression} right The right expression.
     */
    constructor(left: Expression, right: Expression) {
        this.left = left
        this.right = right
    }

    /**
     * Builds the query from the conjunction.
     * @return {String} The query.
     */
    buildQuery(): string {
        if (this.left == undefined || this.left == null) {
            throw 'cannot build query with an empty left condition'
        }
        if (this.right == undefined || this.right == null) {
            throw 'cannot build query with an empty right condition'
        }
        return `(${this.left.buildQuery()} and ${this.right.buildQuery()})`
    }

    /**
     * Builds the query from the conjunction.
     * @return {String} The query.
     */
    toString(): string {
        return this.buildQuery()
    }
}