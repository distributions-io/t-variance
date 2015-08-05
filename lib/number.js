'use strict';

// MODULES //

var isPositive = require( 'validate.io-positive-primitive' );


// VARIANCE //

/**
* FUNCTION variance( v )
*	Computes the distribution variance for a Student t distribution with parameter v.
*
* @param {Number} v - degrees of freedom
* @returns {Number} distribution variance
*/
function variance( v ) {
	if ( !isPositive( v ) || v < 1 ) {
		return NaN;
	}
	if ( v <= 2 ) {
		return Number.POSITIVE_INFINITY;
	} else {
		return v / ( v - 2 );
	}
} // end FUNCTION variance()


// EXPORTS

module.exports =  variance;
