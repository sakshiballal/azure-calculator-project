const request = require("supertest");
const app = require("../../server");

describe("Calculator API Integration Tests", () => {

  test("GET /health should return 200", async () => {
    const response = await request(app)
      .get("/health");

    expect(response.statusCode).toBe(200);
  });

  test("POST /calculate should add two numbers", async () => {
    const response = await request(app)
      .post("/calculate")
      .send({
        num1: 10,
        num2: 5,
        operation: "add"
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.result).toBe(15);
  });

  test("POST /calculate should subtract two numbers", async () => {
    const response = await request(app)
      .post("/calculate")
      .send({
        num1: 10,
        num2: 5,
        operation: "subtract"
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.result).toBe(5);
  });

});
