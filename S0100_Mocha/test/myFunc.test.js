var assert = require('assert');

var myFunc = require('../myFunc.js');

describe('myFunc', function() {
  describe('#add()', function() {
    it('1 + 1 = 2', function() {
      assert.equal(2, myFunc.add(1,1));
    });
  });
});
