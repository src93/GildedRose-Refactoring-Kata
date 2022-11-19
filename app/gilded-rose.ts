import { UpdatableItem } from "./updatable-item";

export class GildedRose {
  constructor() {

  }

  updateQuality(items: Array<UpdatableItem>): void {
    items.forEach(item => item.update())
  }
}