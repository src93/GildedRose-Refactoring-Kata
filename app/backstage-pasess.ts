import { Item } from "./item";
import { UpdatableItem } from "./updatable-item";

export class BackstagePassesItem extends UpdatableItem {
  constructor(item: Item) {
    super(item);
  }

  update(): void {
    this.reduceSellIn();
    this.increaseQuality();
    if (this.isSellInBelowEleven()) {
      this.increaseQuality();
    }
    if (this.isSellInBelowSix()) {
      this.increaseQuality();
    }
    if (this.isSellInBelowZero()) {
      this.resetQuality();
    }
  }
}