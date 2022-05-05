import { expect } from 'chai';
import { Condition } from '../../src/filter/condition';
import { Operator } from '../../src/filter/operator';

var cBool: Condition
var cNum: Condition
var cString: Condition
var cNull: Condition

beforeEach(function () {
  cBool = new Condition('qualified', Operator.EQ, true)
  cNum = new Condition('price', Operator.LTE, 10.12);
  cString = new Condition('sweet', Operator.ENDS_WITH, 'cioccolato')
  cNull = new Condition('girlfriend', Operator.IS_NOT, null)
});

describe('Condition', function () {
  it('should create an instance of Condition', function () {
    expect(cBool).to.be.a("object");
    expect(cNum).to.be.a("object");
    expect(cString).to.be.a("object");
    expect(cNull).to.be.a("object");
  });

  it('test attribute "field"', function () {
    expect(cBool.field).to.equal('qualified')
    cBool.field = 'phd'
    expect(cBool.field).to.equal('phd')
    expect(cNum.field).to.equal('price')
    expect(cString.field).to.equal('sweet')
    expect(cNull.field).to.equal('girlfriend')
  });

  it('test attribute "operator"', function () {
    expect(cBool.operator).to.equal(Operator.EQ)
    expect(cNum.operator).to.equal(Operator.LTE)
    cNum.operator = Operator.GTE
    expect(cNum.operator).to.equal(Operator.GTE)
    expect(cString.operator).to.equal(Operator.ENDS_WITH)
    expect(cNull.operator).to.equal(Operator.IS_NOT)
  });

  it('test attribute "value"', function () {
    expect(cBool.value).to.equal(true)
    expect(cNum.value).to.equal(10.12)
    expect(cString.value).to.equal('cioccolato')
    cString.value = 'panna'
    expect(cString.value).to.equal('panna')
    expect(cNull.value).to.equal(null)
  });

  it('test method "buildQuery"', function () {
    expect(cBool.buildQuery()).to.equal('qualified = true')
    expect(cNum.buildQuery()).to.equal('price <= 10.12')
    expect(cString.buildQuery()).to.equal('sweet ends with \'cioccolato\'')
    expect(cNull.buildQuery()).to.equal('girlfriend is not null')
  });

});