import { expect } from 'chai'
import { Condition } from '../../src/filter/condition'
import { Conjunction } from '../../src/filter/conjunction'
import { Disjunction } from '../../src/filter/disjunction'
import { Filter } from '../../src/filter/filter'
import { Operator } from '../../src/filter/operator'

let e: Condition
let e1: Condition
let c1: Condition
let c2: Condition
let f: Filter
let fEmpty: Filter

beforeEach(function () {
  e = new Condition('nation', Operator.EQ, 'IT')
  e1 = new Condition('company', Operator.EQ, 'Madbit Entertainment S.r.l.')
  c1 = new Condition('city', Operator.EQ, 'Warsaw')
  c2 = new Condition('company', Operator.EQ, 'Przewodniczka Social Media')
  f = new Filter(e)
  fEmpty = new Filter()
})

describe('Filter', function () {
  it('should create an instance of Filter', function () {
    expect(f).to.be.a('object')
  })

  it('test attribute "expression"', function () {
    expect(f.expression).to.equal(e)
    f.expression = e1
    expect(f.expression).to.equal(e1)
  })

  it('test method where', function () {
    expect(fEmpty.expression).to.equal(null)

    fEmpty.where('nation', Operator.EQ, 'IT')
    expect(fEmpty.expression).to.eql(e)

    fEmpty.where('company', Operator.EQ, 'Madbit Entertainment S.r.l.')
    expect(fEmpty.expression).to.eql(e1)
  })

  it('test method whereExpression', function () {
    expect(fEmpty.expression).to.equal(null)

    fEmpty.whereExpression(e)
    expect(fEmpty.expression).to.equal(e)

    fEmpty.whereExpression(e1)
    expect(fEmpty.expression).to.equal(e1)
  })

  it('test method and', function () {
    expect(fEmpty.expression).to.equal(null)

    const conj = new Conjunction(c1, c2)

    const andError = function () { fEmpty.and('company', Operator.EQ, 'reply') }

    expect(andError).to.throw('Cannot create a conjunction with an empty expression.')

    fEmpty.where('city', Operator.EQ, 'Warsaw').and('company', Operator.EQ, 'Przewodniczka Social Media')
    expect(fEmpty.expression).to.eql(conj)
  })

  it('test method andExpression', function () {
    expect(fEmpty.expression).to.equal(null)

    const conj = new Conjunction(c1, c2)

    const andError = function () { fEmpty.andExpression(c2) }

    expect(andError).to.throw('Cannot create a conjunction with an empty expression.')

    const andNullError = function () { fEmpty.whereExpression(c1).andExpression(null) }

    expect(andNullError).to.throw('Cannot create a conjunction with an empty expression.')

    fEmpty.whereExpression(c1).andExpression(c2)
    expect(fEmpty.expression).to.eql(conj)
  })

  it('test method andFilter', function () {
    expect(fEmpty.expression).to.equal(null)

    const conj = new Conjunction(c1, c2)

    const andError = function () { fEmpty.andFilter(new Filter(c2)) }

    expect(andError).to.throw('Cannot create a conjunction with an empty expression.')

    const andNullError = function () { fEmpty.whereExpression(c1).andFilter(null) }

    expect(andNullError).to.throw('Cannot create a conjunction with an empty expression.')

    fEmpty.whereExpression(c1).andFilter(new Filter(c2))
    expect(fEmpty.expression).to.eql(conj)
  })

  it('test method or', function () {
    expect(fEmpty.expression).to.equal(null)

    const disj = new Disjunction(c1, c2)

    const orError = function () { fEmpty.or('company', Operator.EQ, 'reply') }

    expect(orError).to.throw('Cannot create a disjunction with an empty expression.')

    fEmpty.where('city', Operator.EQ, 'Warsaw').or('company', Operator.EQ, 'Przewodniczka Social Media')
    expect(fEmpty.expression).to.eql(disj)
  })

  it('test method orExpression', function () {
    expect(fEmpty.expression).to.equal(null)

    const disj = new Disjunction(c1, c2)

    const orError = function () { fEmpty.orExpression(c2) }

    expect(orError).to.throw('Cannot create a disjunction with an empty expression.')

    const orNullError = function () { fEmpty.whereExpression(c1).orExpression(null) }

    expect(orNullError).to.throw('Cannot create a disjunction with an empty expression.')

    fEmpty.whereExpression(c1).orExpression(c2)
    expect(fEmpty.expression).to.eql(disj)
  })

  it('test method orFilter', function () {
    expect(fEmpty.expression).to.equal(null)

    const disj = new Disjunction(c1, c2)

    const orError = function () { fEmpty.orFilter(new Filter(c2)) }

    expect(orError).to.throw('Cannot create a disjunction with an empty expression.')

    const orNullError = function () { fEmpty.whereExpression(c1).orFilter(null) }

    expect(orNullError).to.throw('Cannot create a disjunction with an empty expression.')

    fEmpty.whereExpression(c1).orFilter(new Filter(c2))
    expect(fEmpty.expression).to.eql(disj)
  })

  it('test method buidQuery', function () {
    expect(fEmpty.buildQuery()).to.equal('')

    fEmpty = new Filter(new Condition('company', Operator.EQ, 'Pzwodniczka Social Media'))
    console.log(fEmpty.buildQuery())
    expect(fEmpty.buildQuery()).to.equal("company = 'Pzwodniczka Social Media'")
  })

  it('test method buildUrlEncodedQuery', function () {
    expect(fEmpty.buildUrlEncodedQuery()).to.equal('')

    fEmpty = new Filter(new Condition('company', Operator.EQ, 'Pzwodniczka Social Media'))
    expect(fEmpty.buildUrlEncodedQuery()).to.equal("company%20=%20'Pzwodniczka%20Social%20Media'")
  })

  it('test method toString', function () {
    expect(fEmpty.toString()).to.equal('')

    fEmpty = new Filter(new Condition('company', Operator.EQ, 'Pzwodniczka Social Media'))
    expect(fEmpty.toString()).to.equal("company = 'Pzwodniczka Social Media'")
  })
})
