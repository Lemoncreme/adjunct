//adjunct.js 1.0.0
//adjunct may be freely distributed or modified under the MIT license.

(function () {
	if (typeof Array.prototype.remove == "undefined") {
		/**
		 * Removes a specific element from the array
		 *
		 * @param element The element to remove
		 * @return the element, or undefined
		 */
		Array.prototype.remove = function (element) {
			return this.splice(this.indexOf(element), 1)[0];
		};
	}
	if (typeof Array.prototype.replace == "undefined") {
		/**
		 * Removes a specific element from the array, and then replaces it
		 *
		 * @param element The element to remove
		 * @param replacement The object to replace element with
		 * @return the element, or undefined
		 */
		Array.prototype.replace = function (element, replacement) {
			return this.splice(this.indexOf(element), 1, replacement)[0];
		};
	}
	if (typeof Array.prototype.clear == "undefined") {
		/**
		 * Removes all elements from the array
		 */
		Array.prototype.clear = function () {
			this.length = 0;
		};
	}
})();

