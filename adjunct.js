//adjunct.js 1.0.0
//adjunct may be freely distributed or modified under the MIT license.

(function () {
	if (typeof Object.sumMembers == "undefined") {
		/**
		 * Sums all Number properties into obj
		 *
		 * @params obj The object to sum into
		 * @params objects
		 */
		Object.sumMembers = function (obj) {
			var args = arguments;
			for (var i = 1; i < args.length; i++) {
				Object.keys(args[i]).forEach(function(key){
					if (typeof args[i][key] == "number"
						&& typeof obj[key] == "number") {
						obj[key] += args[i][key];
					}
				});
			}
		};
	}
	if (typeof Math.ground == "undefined") {
		/**
		 * Clamps a number, upper bound only
		 *
		 * @param      {Number}  min     The minimum value
		 * @return     {Number}    Number, capped
		 */
		Math.ground = function (num, min) {
			return Math.max(num, min);
		};
	}
	if (typeof Math.cap == "undefined") {
		/**
		 * Clamps a number, upper bound only
		 *
		 * @param      {Number}  max     The maximum value
		 * @return     {Number}    This number, capped
		 */
		Math.cap = function (num, max) {
			return Math.min(num, max);
		};
	}
	if (typeof Math.clamp == "undefined") {
		/**
		 * Clamps a number between two points
		 *
		 * @param      {Number}  min     The minimum value
		 * @param      {Number}  max     The maximum value
		 * @return     {Number}    This number, clamped
		 */
		Math.clamp = function (num, min, max) {
			return Math.min(Math.max(num, min), max);
		};
	}
	if (typeof Array.prototype.remove == "undefined") {
		/**
		 * Removes a specific element from the array
		 *
		 * @param element The element to remove
		 * @return the element, or undefined
		 */
		Array.prototype.remove = function (element) {
			var index = this.indexOf(element);
			if (index > 0)
				return this.splice(index, 1)[0];
			else
				return undefined;
		};
	}
	if (typeof Array.prototype.removeAll == "undefined") {
		/**
		 * Removes all occurences of element in this array
		 *
		 * @param element The element(s) to remove
		 * @return array of elements removed
		 */
		Array.prototype.removeAll = function (element) {
			var index, result = [];
			while ((index = this.indexOf(element)) > -1) {
				result.push(this.splice(index, 1)[0]);
			}
			return result;
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
			var index = this.indexOf(element);
			if (index > 0)
				return this.splice(this.indexOf(element), 1, replacement)[0];
			else
				return undefined;
		};
	}
	if (typeof Array.prototype.replaceAll == "undefined") {
		/**
		 * Replaces all occurences of element in this array
		 *
		 * @param element The element(s) to remove
		 * @param replacement The object to replace element(s) with
		 * @return array of elements replaced
		 */
		Array.prototype.replaceAll = function (element, replacement) {
			var index, result = [];
			while ((index = this.indexOf(element)) > -1) {
				result.push(this.splice(index, 1, replacement)[0]);
			}
			return result;
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
	if (typeof Array.prototype.flatten == "undefined") {
		/**
		 * Places all element in nested arrays into root
		 */
		Array.prototype.flatten = function () {
			for(var i = this.length - 1; i >= 0; i--) {
				if (this[i].constructor.name == "Array") {
					this.splice(i, 1)[0].flatten().forEach(function(e){
						this.push(e);
					}, this);
					i = this.length - 1;
				}
			}
			return this;
		};
	}
	if (typeof String.prototype.demarcate == "undefined") {
		/**
		 * Places all element in nested arrays into root
		 */
		Array.prototype.flatten = function () {
			for(var i = this.length - 1; i >= 0; i--) {
				if (this[i].constructor.name == "Array") {
					this.splice(i, 1)[0].flatten().forEach(function(e){
						this.push(e);
					}, this);
					i = this.length - 1;
				}
			}
			return this;
		};
	}
})();

