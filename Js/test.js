//test unitarios para Collatz-pseudo-sequence.js

'use strict';

const assert = require('assert');

const collatzCycleSize = require('./Collatz-pseudo-sequences.js');

describe('collatzCycleSize function', function() {
    it('should return 3 for 1, 5, 8', function() {
        assert.equal(collatzCycleSize(1, 5, 8), 3);
    });
    it('should return 1 for 0, 5, 0', function() {
        assert.equal(collatzCycleSize(0, 5, 0), 1);
    });
    it('should return 1 for 10, 11, 3', function() {
        assert.equal(collatzCycleSize(10, 11, 3), 1);
    });
    it('should return 35 for 7, 3, 6', function() {
        assert.equal(collatzCycleSize(7, 3, 6), 35);
    });
    it('should return 1501002 for 1, 999, 1000000', function() {
        assert.equal(collatzCycleSize(1, 999, 1000000), 1501002);
    });
    it('should return 490 for 433, 805, 215476', function() {
        assert.equal(collatzCycleSize(433, 805, 215476), 490);
    });
});

