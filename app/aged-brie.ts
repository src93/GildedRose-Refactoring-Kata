import { Item } from "./item";
import { UpdatableItem } from "./updatable-item";

export class AgedBrieItem extends UpdatableItem {
  constructor(item: Item) {
    super(item);
  }

  update(): void {
    this.reduceSellIn();
    this.increaseQuality();
    if (this.isSellInBelowZero()) {
      this.increaseQuality();
    }
  }
}