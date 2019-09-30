import { noop } from "utils/helpers";

/**
 *
 * @param {{aNum: number, sum: number, prev: number, cb: function}} param0
 * @returns {number} the number at the aNum spot in the fibonacci sequence
 */
function fib(
	{ aNum, sum = 0, prev = 1, cb = noop } = {
		aNum: 0,
		sum: 0,
		prev: 1,
		cb: noop,
	},
) {
	// handle the case that the user doesn't provide us with a number
	// for either aNum, sum, and prev or if the cb is not a function
	if (
		[aNum, sum, prev].some(val => typeof val !== "number") ||
		typeof cb !== "function"
	) {
		return 0;
	}

	// callback function to be called with the running sum
	cb(sum);

	// base case for fib
	// if 0 or 1, return the running sum
	if (aNum < 2) {
		return sum;
	}

	// JavaScript doesn't support recursion too well unless you're doing a tail recursive call
	// we essentially need to return a primitive value so we don't fill up the call stack.
	return fib({ aNum: aNum - 1, sum: prev + sum, prev: sum, cb });
}

/**
 *
 * @param {number} aNum the nth spot in the fib sequence
 * @returns {[number]}  array of the nth (aNum) numbers in the fib sequence
 */
function fibOutputArray(aNum) {
	// return an empty array if not a number provided
	if (typeof aNum !== "number") {
		return [];
	}

	if (aNum < 0) {
		return [];
	}
	var outputArray = [];

	fib({ aNum, cb: val => outputArray.push(val) });
	return outputArray;
}

export { fib, fibOutputArray };
