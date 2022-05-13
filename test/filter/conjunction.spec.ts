import { expect } from 'chai'
import { Condition } from '../../src/filter/condition'
import { Conjunction } from '../../src/filter/conjunction'
import { Operator } from '../../src/filter/operator'

let left: Condition
let right: Condition
let c: Conjunction
let left1: Condition
let right1: Condition

beforeEach(function () {
  left = new Condition('city', Operator.EQ, 'Bergamo')
  right = new Condition('age', Operator.LT, 35)
  c = new Conjunction(left, right)
  left1 = new Condition('team', Operator.EQ, 'Volley Bergamo 1991')
  right1 = new Condition('best_player', Operator.IS_NOT, null)
})

describe('Conjunction', function () {
  it('should create an instance of Conjunction', function () {
    expect(c).to.be.a('object')
  })

  it('test attribute "left"', function () {
    expect(c.left).to.equal(left)
    c.left = left1
    expect(c.left).to.equal(left1)
  })

  it('test attribute "right"', function () {
    expect(c.right).to.equal(right)
    c.right = right1
    expect(c.right).to.equal(right1)
  })

  it('test method buildQuery', function () {
    expect(c.buildQuery()).to.equal("(city = 'Bergamo' and age < 35)")
    c.left = left1
    c.right = right1
    expect(c.buildQuery()).to.equal("(team = 'Volley Bergamo 1991' and best_player is not null)")
  })
})
