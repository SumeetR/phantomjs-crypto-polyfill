/** phantomjs-crypto-polyfill
	* Polyfill simply overrides the crypto.getRandomValues function
 	* returning the input
 	* This avoids issues with phantomjs, as this function is not implemented
*/
if (window && window.crypto) {
	window.crypto.getRandomValues = function getRandomValues(array) {
	    return array;
	}
}
