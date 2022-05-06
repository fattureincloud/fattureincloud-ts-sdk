import { expect } from 'chai';
import { Condition } from '../../src/filter/condition';
import { Disjunction } from '../../src/filter/disjunction';
import { Operator } from '../../src/filter/operator';

var left: Condition
var right: Condition
var c: Disjunction
var left1: Condition
var right1: Condition

beforeEach(function () {
  left = new Condition('city', Operator.EQ, 'Bergamo')
  right = new Condition('age', Operator.LT, 35);
  c = new Disjunction(left, right)
  left1 = new Condition('team', Operator.EQ, 'Volley Bergamo 1991')
  right1 = new Condition('best_player', Operator.IS_NOT, null)
});

describe('Disjunction', function () {
  it('should create an instance of Disjunction', function () {
    expect(c).to.be.a('object');
  });

  it('test attribute "left"', function () {
    expect(c.left).to.equal(left)
    c.left = left1
    expect(c.left).to.equal(left1)
  });

  it('test attribute "right"', function () {
    expect(c.right).to.equal(right)
    c.right = right1
    expect(c.right).to.equal(right1)
  });

  it('test method buildQuery', function () {
    expect(c.buildQuery()).to.equal('(city = \'Bergamo\' or age < 35)')
    c.left = left1
    c.right = right1
    expect(c.buildQuery()).to.equal('(team = \'Volley Bergamo 1991\' or best_player is not null)')
  });

});
