import { paginate } from "./paginate";

describe("paginate", () => {
  const items = Array.from({ length: 20 }, (_, i) => i + 1); // [1..20]

  it("returns correct items for page 1", () => {
    const result = paginate(items, 1, 5);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("returns correct items for page 2", () => {
    const result = paginate(items, 2, 5);
    expect(result).toEqual([6, 7, 8, 9, 10]);
  });

  it("returns empty if page is out of bounds", () => {
    const result = paginate(items, 10, 5);
    expect(result).toEqual([]);
  });
});
