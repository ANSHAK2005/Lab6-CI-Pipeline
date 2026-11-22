
const { getProducts, getProductById } = require("./app");

test("should return all products", () => {
  expect(getProducts()).toHaveLength(3);
});

test("should return a product by ID", () => {
  expect(getProductById(1).name).toBe("Laptop");
});

test("should return undefined for an invalid ID", () => {
  expect(getProductById(99)).toBeUndefined();
});
