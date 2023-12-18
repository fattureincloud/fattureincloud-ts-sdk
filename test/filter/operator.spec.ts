import { expect } from 'chai'
import { Operator } from '../../src/filter/operator'

// beforeEach(function () {
// })

describe('Operator', function () {
  it('test Operator enum', function () {
    expect(Operator.EQ).to.equal('=')
    expect(Operator.GT).to.equal('>')
    expect(Operator.GTE).to.equal('>=')
    expect(Operator.LT).to.equal('<')
    expect(Operator.LTE).to.equal('<=')
    expect(Operator.NEQ).to.equal('<>')
    expect(Operator.IS).to.equal('is')
    expect(Operator.IS_NOT).to.equal('is not')
    expect(Operator.LIKE).to.equal('like')
    expect(Operator.CONTAINS).to.equal('contains')
    expect(Operator.NOT_LIKE).to.equal('not like')
    expect(Operator.NOT_CONTAINS).to.equal('not contains')
    expect(Operator.STARTS_WITH).to.equal('starts with')
    expect(Operator.ENDS_WITH).to.equal('ends with')
  })
})
