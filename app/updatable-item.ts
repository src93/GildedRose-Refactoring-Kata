import { Item } from "./item";

export abstract class UpdatableItem extends Item {
  private minQuality: number;
  private maxQuality: number;
  private item: Item;

  constructor(item: Item) {
    super(item.name, item.sellIn, item.quality);
    this.maxQuality = 50;
    this.minQuality = 0;
    this.item = item;
  }

  abstract update(): void;

  isQualityBelowMax(): boolean {
    return this.item.quality < this.maxQuality;
  }

  isQualityAboveMinQuality(): boolean {
    return this.item.quality > this.minQuality;
  }

  isSellInBelowEleven(): boolean {
    return this.item.sellIn < 11;
  }

  isSellInBelowSix(): boolean {
    return this.item.sellIn < 6;
  }

  isSellInBelowZero(): boolean {
    return this.item.sellIn < 0;
  }

  reduceSellIn(): void {
    this.item.sellIn--;
  }

  increaseQuality(): void {
    if (this.isQualityBelowMax()) {
      this.item.quality++;
    }
  }

  reduceQuality(): void {
    if (this.isQualityAboveMinQuality()) {
      this.item.quality--;
    }
  }

  resetQuality(): void {
    this.item.quality = 0;
  }
}