import { describe, it, expect } from "vitest";
import { AdvancedDiscount, Discount, SimpleDiscount, Store } from "./strategy";

describe("strategy", () => {
  it("simple discount", () => {
    const discount: Discount = new SimpleDiscount();
    expect(discount.calculate(100)).toBe(90);
  });

  it("advanced discount", () => {
    const discount: Discount = new AdvancedDiscount();
    expect(discount.calculate(100)).toBe(80);
  });

  it("store", () => {
    const store = new Store(new SimpleDiscount());
    store.setTotalValue(100);
    expect(store.getTotalWithDiscount()).toBe(90);
  });
});
