describe("Calculator Unit Tests", () => {

  test("addition should work", () => {
    const result = 10 + 5;
    expect(result).toBe(15);
  });

  test("subtraction should work", () => {
    const result = 10 - 5;
    expect(result).toBe(5);
  });

  test("multiplication should work", () => {
    const result = 10 * 5;
    expect(result).toBe(50);
  });

  test("division should work", () => {
    const result = 10 / 5;
    expect(result).toBe(2);
  });

});