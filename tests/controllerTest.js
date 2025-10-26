const { expect } = require("chai");
const { describe, it } = require("mocha");
const auxiliaryAPI = require("../public/js/auxiliaryAPI");

describe("Temperature conversion", function () {
	describe("celsiusToFahrenheit()", function () {
		it("should convert positive temperatures (boiling point of water)", function () {
			expect(auxiliaryAPI.celsiusToFahrenheit(100)).to.equal(212);
		});

		it("should convert zero temperature (0)", function () {
			expect(auxiliaryAPI.celsiusToFahrenheit(0)).to.equal(32);
		});

		it("should convert negative temperatures", function () {
			expect(auxiliaryAPI.celsiusToFahrenheit(-20)).to.equal(-4);
		});
	});

	describe("fahrenheitToCelcius()", function () {
		it("should convert positive temperatures (boiling point of water)", function () {
			expect(auxiliaryAPI.fahrenheitToCelcius(212)).to.equal(100);
		});

		it("should convert zero temperature (0)", function () {
			expect(auxiliaryAPI.fahrenheitToCelcius(0)).to.be.closeTo(-17.777, 0.001);
		});

		it("should convert negative temperatures", function () {
			expect(auxiliaryAPI.fahrenheitToCelcius(-4)).to.equal(-20);
		});
	});

	describe("getGreetingDependOnTime()", function () {
		it("should greet with Guten Morgen after 6am", function () {
			expect(auxiliaryAPI.getGreetingDependOnTime(new Date("2025-10-26T05:00:00"))).to.not.equal("Guten Morgen");
			expect(auxiliaryAPI.getGreetingDependOnTime(new Date("2025-10-26T06:00:00"))).to.equal("Guten Morgen");
			expect(auxiliaryAPI.getGreetingDependOnTime(new Date("2025-10-26T08:00:00"))).to.equal("Guten Morgen");
			expect(auxiliaryAPI.getGreetingDependOnTime(new Date("2025-10-26T21:00:00"))).to.equal("Guten Morgen");
			expect(auxiliaryAPI.getGreetingDependOnTime(new Date("2025-10-26T22:00:00"))).to.not.equal("Guten Morgen");
		});

		it("should greet with Guten Abend after 10pm", function () {
			expect(auxiliaryAPI.getGreetingDependOnTime(new Date("2025-10-26T21:00:00"))).to.not.equal("Guten Abend");
			expect(auxiliaryAPI.getGreetingDependOnTime(new Date("2025-10-26T22:00:00"))).to.equal("Guten Abend");
			expect(auxiliaryAPI.getGreetingDependOnTime(new Date("2025-10-26T05:00:00"))).to.equal("Guten Abend");
			expect(auxiliaryAPI.getGreetingDependOnTime(new Date("2025-10-26T06:00:00"))).to.not.equal("Guten Abend");
		});
	});
});
