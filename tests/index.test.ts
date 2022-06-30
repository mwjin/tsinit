import { helloToJest } from "../src/index";

describe("testing index file", () => {
  test('return "Hello, Jest!"', () => {
    expect(helloToJest()).toBe("Hello, Jest!");
  });
});
