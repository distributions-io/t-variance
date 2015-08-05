/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Validate a value is NaN:
	isnan = require( 'validate.io-nan' ),

	// Module to be tested:
	variance = require( './../lib/number.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'number variance', function tests() {

	it( 'should export a function', function test() {
		expect( variance ).to.be.a( 'function' );
	});

	it( 'should compute the distribution variance', function test() {
		assert.strictEqual( variance( 2 ), Infinity );
		assert.closeTo( variance( 4  ), 2, 1e-5 );
		assert.closeTo( variance( 8  ), 8/6, 1e-5 );
		assert.closeTo( variance( 16  ), 16/14, 1e-5 );
	});

	it( 'should return `NaN` for invalid values of parameter v', function test() {
		assert.isTrue( isnan( variance( -1 ) ) );
	});

});
