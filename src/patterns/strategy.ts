export interface Discount {
  calculate(price: number): number;
}

export class SimpleDiscount implements Discount {
  calculate(price: number): number {
    return price * 0.9;
  }
}

export class AdvancedDiscount implements Discount {
  calculate(price: number): number {
    return price * 0.8;
  }
}

export class Store {
  totalValue!: number;
  discount: Discount;

  constructor(discount: Discount) {
    this.discount = discount;
  }

  setTotalValue(value: number): void {
    this.totalValue = value;
  }

  getTotalWithDiscount(): number {
    return this.discount.calculate(this.totalValue);
  }
}
