import { pluck, range } from "./utils";

describe("utils", () => {
  describe("range", () => {
    it("returns correct range from 1 to 5", () => {
      expect(range(1, 5)).toEqual([1, 2, 3, 4])
    });
  });

  describe("pluck", () => {
    it("returns correct result for id", () => {
      const data = [
        { id: 1, name: "Foo" },
        { id: 2, name: "Bar" },
        { id: 3, name: "Baz" },
      ];

      expect(pluck(data, 'id')).toEqual([1, 2, 3])
    });
  });
});
