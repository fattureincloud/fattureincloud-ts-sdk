import { expect } from 'chai';
import { Condition } from '../../src/filter/condition';
import { Conjunction } from '../../src/filter/conjunction';
import { Disjunction } from '../../src/filter/disjunction';
import { Filter } from '../../src/filter/filter';
import { Operator } from '../../src/filter/operator';

var e: Condition
var e1: Condition
var c1: Condition
var c2: Condition
var f: Filter
var f_empty: Filter

beforeEach(function () {
  e = new Condition('nation', Operator.EQ, 'IT')
  e1 = new Condition('company', Operator.EQ, 'Madbit Entertainment S.r.l.');
  c1 = new Condition('city', Operator.EQ, 'Warsaw')
  c2 = new Condition('company', Operator.EQ, 'Przewodniczka Social Media')
  f = new Filter(e)
  f_empty = new Filter()
});

describe('Filter', function () {
  it('should create an instance of Filter', function () {
    expect(f).to.be.a('object');
  });

  it('test attribute "expression"', function () {
    expect(f.expression).to.equal(e)
    f.expression = e1
    expect(f.expression).to.equal(e1)
  });

  it('test method where', function () {
    expect(f_empty.expression).to.equal(null)

    f_empty.where('nation', Operator.EQ, 'IT')
    expect(f_empty.expression).to.eql(e)

    f_empty.where('company', Operator.EQ, 'Madbit Entertainment S.r.l.')
    expect(f_empty.expression).to.eql(e1)
  });

  it('test method whereExpression', function () {
    expect(f_empty.expression).to.equal(null)

    f_empty.whereExpression(e)
    expect(f_empty.expression).to.equal(e)

    f_empty.whereExpression(e1)
    expect(f_empty.expression).to.equal(e1)
  });

  it('test method and', function () {
    expect(f_empty.expression).to.equal(null)

    var conj = new Conjunction(c1, c2)

    var andError = function () { f_empty.and('company', Operator.EQ, 'reply') };

    expect(andError).to.throw('Cannot create a conjunction with an empty expression.')

    f_empty.where('city', Operator.EQ, 'Warsaw').and('company', Operator.EQ, 'Przewodniczka Social Media')
    expect(f_empty.expression).to.eql(conj)
  });

  it('test method andExpression', function () {
    expect(f_empty.expression).to.equal(null)

    var conj = new Conjunction(c1, c2)

    var andError = function () { f_empty.andExpression(c2) };

    expect(andError).to.throw('Cannot create a conjunction with an empty expression.')

    var andNullError = function () { f_empty.whereExpression(c1).andExpression(null) };

    expect(andNullError).to.throw('Cannot create a conjunction with an empty expression.')

    f_empty.whereExpression(c1).andExpression(c2)
    expect(f_empty.expression).to.eql(conj)
  });

  it('test method andFilter', function () {
    expect(f_empty.expression).to.equal(null)

    var conj = new Conjunction(c1, c2)

    var andError = function () { f_empty.andFilter(new Filter(c2)) };

    expect(andError).to.throw('Cannot create a conjunction with an empty expression.')

    var andNullError = function () { f_empty.whereExpression(c1).andFilter(null) };

    expect(andNullError).to.throw('Cannot create a conjunction with an empty expression.')

    f_empty.whereExpression(c1).andFilter(new Filter(c2))
    expect(f_empty.expression).to.eql(conj)
  });

  it('test method or', function () {
    expect(f_empty.expression).to.equal(null)

    var disj = new Disjunction(c1, c2)

    var orError = function () { f_empty.or('company', Operator.EQ, 'reply') };

    expect(orError).to.throw('Cannot create a disjunction with an empty expression.')

    f_empty.where('city', Operator.EQ, 'Warsaw').or('company', Operator.EQ, 'Przewodniczka Social Media')
    expect(f_empty.expression).to.eql(disj)
  });

  it('test method orExpression', function () {
    expect(f_empty.expression).to.equal(null)

    var disj = new Disjunction(c1, c2)

    var orError = function () { f_empty.orExpression(c2) };

    expect(orError).to.throw('Cannot create a disjunction with an empty expression.')

    var orNullError = function () { f_empty.whereExpression(c1).orExpression(null) };

    expect(orNullError).to.throw('Cannot create a disjunction with an empty expression.')

    f_empty.whereExpression(c1).orExpression(c2)
    expect(f_empty.expression).to.eql(disj)
  });

  it('test method orFilter', function () {
    expect(f_empty.expression).to.equal(null)

    var disj = new Disjunction(c1, c2)

    var orError = function () { f_empty.orFilter(new Filter(c2)) };

    expect(orError).to.throw('Cannot create a disjunction with an empty expression.')

    var orNullError = function () { f_empty.whereExpression(c1).orFilter(null) };

    expect(orNullError).to.throw('Cannot create a disjunction with an empty expression.')

    f_empty.whereExpression(c1).orFilter(new Filter(c2))
    expect(f_empty.expression).to.eql(disj)
  });

  it('test method buidQuery', function () {
    expect(f_empty.buildQuery()).to.equal('')

    f_empty = new Filter(new Condition('company', Operator.EQ, 'Pzwodniczka Social Media'))
    console.log(f_empty.buildQuery())
    expect(f_empty.buildQuery()).to.equal("company = 'Pzwodniczka Social Media'")
  });

  it('test method buildUrlEncodedQuery', function () {
    expect(f_empty.buildUrlEncodedQuery()).to.equal('')

    f_empty = new Filter(new Condition('company', Operator.EQ, 'Pzwodniczka Social Media'))
    expect(f_empty.buildUrlEncodedQuery()).to.equal("company%20=%20\'Pzwodniczka%20Social%20Media\'")
  });

  it('test method toString', function () {
    expect(f_empty.toString()).to.equal('')

    f_empty = new Filter(new Condition('company', Operator.EQ, 'Pzwodniczka Social Media'))
    expect(f_empty.toString()).to.equal('company = \'Pzwodniczka Social Media\'')
  });
})