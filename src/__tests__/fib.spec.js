import { fib } from "utils/fib";
import { fibOutputArray } from "../utils/fib";

describe("Fibonacci calculation", () => {
	it("should return 0 if called without arguments", () => {
		expect(fib()).toBe(0);
	});

	it("should return 34 as the 10th number in the sequence", () => {
		const res = fib({ aNum: 10 });
		const exp = 34;
		expect(res).toEqual(exp);
	});

	it("should return 0 if aNum arg is non number", () => {
		const res = fib({ aNum: "fasdfsd" });
		const exp = 0;

		expect(res).toEqual(exp);
	});

	it("should return 0 if sum arg is non number", () => {
		const res = fib({ aNum: 10, sum: "asdfs" });
		const exp = 0;

		expect(res).toEqual(exp);
	});

	it("should return 0 if prev arg is non number", () => {
		const res = fib({ aNum: 10, sum: 0, prev: "asfsd" });
		const exp = 0;

		expect(res).toEqual(exp);
	});
});

describe("Fibonacci sequence", () => {
	it("should return the empty array if no argument provided", () => {
		const res = fibOutputArray();
		expect(res.length).toBe(0);
	});

	it("should return the empty array if negative number provided", () => {
		const res = fibOutputArray(-20);
		expect(res.length).toBe(0);
	});

	it("should return the empty array if non number argument provided", () => {
		const res = fibOutputArray("adsfsadfas");
		expect(res.length).toBe(0);
	});

	it("should return the first 10 numbers in the sequence", () => {
		const res = fibOutputArray(10);
		const exp = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
		expect(res).toEqual(expect.arrayContaining(exp));
	});
});
