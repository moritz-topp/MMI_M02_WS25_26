const { expect } = require("chai")
const { describe, it } = require("mocha")

// Sample JUnit test
function sum(arr) {
	let res = 0
	for (let i = 0; i < arr.length; i++) {
		res += arr[i]
	}
	return res
}

describe("#sum()", () => {
	it("should add numbers", () => {
		expect(sum([1, 2, 3, 4, 5])).to.equal(15)
	})

	it("should handle negative numbers", () => {
		expect(sum([-5, 5, -10, 0])).to.equal(-10)
	})

	it("should return 0 for an empty array", () => {
		expect(sum([])).to.equal(0)
	})

	it("should work with floating point numbers", () => {
		expect(sum([0.1, 0.2, 0.3])).to.be.closeTo(0.6, 0.0001)
	})
})
