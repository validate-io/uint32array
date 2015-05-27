'use strict';

// FUNCTIONS //

var isStr = Object.prototype.toString;


// IS UINT32ARRAY //

/**
* FUNCTION: isUint32Array( value )
*	Validates if a value is an Uint32Array.
*
* @param {*} value - value to validate
* @returns {Boolean} boolean indicating if a value is an Uint32Array
*/
function isUint32Array( value ) {
	return isStr.call( value ) === '[object Uint32Array]';
} // end FUNCTION isUint32Array()


// EXPORTS //

module.exports = isUint32Array;
