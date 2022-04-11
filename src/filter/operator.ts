/**
 * Company type.
 * @export
 * @enum {string}
 */
export const Operator = {
    /**
     * Equal operator.
     * @member {String} EQ
     */
    EQ: '=',

    /**
     * Greater Than operator.
     * @member {String} GT
     */
    GT: '>',

    /**
     * Greater Than or Equal operator.
     * @member {String} GTE
     */
    GTE: '>=',

    /**
     * Less Than operator.
     * @member {String} LT
     */
    LT: '<',

    /**
     * Less Than or Equal operator.
     * @member {String} LTE
     */
    LTE: '<=',

    /**
     * Not Equal operator.
     * @member {String} NEQ
     */
    NEQ: '<>',

    /**
     * Is operator.
     * @member {String} IS
     */
    IS: 'is',

    /**
     * Is Not operator.
     * @member {String} IS_NOT
     */
    IS_NOT: 'is not',

    /**
     * Like operator.
     * @member {String} GTE
     */
    LIKE: 'like',

    /**
     * Contains operator.
     * @member {String} CONTAINS
     */
    CONTAINS: 'contains',

    /**
     * Starts With operator.
     * @member {String} STARTS_WITH
     */
    STARTS_WITH: 'starts with',

    /**
     * Ends With operator.
     * @member {String} ENDS_WITH
     */
    ENDS_WITH: 'ends with'

} as const

export type Operator = typeof Operator[keyof typeof Operator]