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
	if ( !isPositive( v ) ) {
		return NaN;
	}
	return v / ( v - 2 );
} // end FUNCTION variance()


// EXPORTS

module.exports =  variance;
