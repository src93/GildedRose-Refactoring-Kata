import { Item } from "./item";
import { UpdatableItem } from "./updatable-item";

export class DefaultItem extends UpdatableItem {
  constructor(item: Item) {
    super(item);
  }

  update(): void {
    this.reduceSellIn();
    this.reduceQuality();
    if (this.isSellInBelowZero()) {
      this.reduceQuality();
    }
  }
}