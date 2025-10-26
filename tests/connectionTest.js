const { expect } = require("chai");
const { describe, it } = require("mocha");
const supertest = require("supertest");
const server = require("../index");

const api = supertest.agent(server);

describe("API connection tests", function () {
	it("should convert celsius to fahrenheit via HTTP endpoint", async function () {
		const response = await api.post("/api/fromCelsiusToFahrenheit").send({ temperature: 100 });
		expect(response.status).to.equal(200);
		expect(response.body).to.have.property("result", 212);
	});

	it("should convert fahrenheit to celsius via HTTP endpoint", async function () {
		const response = await api.post("/api/fromFahrheitToCelsius").send({ temperature: 212 });
		expect(response.status).to.equal(200);
		expect(response.body).to.have.property("result", 100);
	});

	it("should return error message for unknown/ 404 route", async function () {
		const response = await api.get("/test-link");
		expect(response.status).to.equal(404);
	});
});
