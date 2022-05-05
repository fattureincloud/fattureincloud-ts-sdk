/**
 * The Expression filter module.
 * @module Expression
 */
export interface Expression {
    /**
     * Builds the query from the expression.
     * @return {String} The query.
     */
    buildQuery(): string
}