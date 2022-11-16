export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;
  private agedBrieName: string;
  private backstageConcertName: string;
  private ragnarosName: string;
  private minQuality: number;
  private maxQuality: number;

  constructor(items = [] as Array<Item>) {
    this.items = items;
    this.agedBrieName = 'Aged Brie';
    this.backstageConcertName = 'Backstage passes to a TAFKAL80ETC concert';
    this.ragnarosName = 'Sulfuras, Hand of Ragnaros';
    this.maxQuality = 50;
    this.minQuality = 0;
  }

  updateQuality() {
    for (let item of this.items) {
      switch (item.name) {
        case this.agedBrieName:
          this.updateAgedBrieItem(item);
          break;
        case this.backstageConcertName:
          this.updateBackstageConcertItem(item);
          break;
        case this.ragnarosName:
          break;
        default:
          this.updateDefaultItem(item);
          break;
      }
    }

    return this.items;
  }

  private updateAgedBrieItem(item: Item) {
    this.reduceSellIn(item);
    this.updateAgedBrieQuality(item);
  }

  private updateBackstageConcertItem(item: Item) {
    this.reduceSellIn(item);
    this.updateBackstageConcertQuality(item);
  }

  private updateDefaultItem(item: Item) {
    this.reduceSellIn(item);
    this.updateDefaultQuality(item);
  }

  private updateDefaultQuality(item: Item) {
    if (this.isQualityAboveMinQuality(item.quality)) {
      this.reduceQuality(item);
    }

    if (this.isSellInBelowZero(item.sellIn) && this.isQualityAboveMinQuality(item.quality)) {
      this.reduceQuality(item);
    }
  }

  private updateAgedBrieQuality(item: Item) {
    if (this.isQualityBelowMax(item.quality)) {
      this.increaseQuality(item);
    }

    if (this.isSellInBelowZero(item.sellIn) && this.isQualityBelowMax(item.quality)) {
      this.increaseQuality(item);
    }
  }

  private updateBackstageConcertQuality(item: Item) {
    if (this.isQualityBelowMax(item.quality)) {
      this.increaseQuality(item);
    }

    if (this.isSellInBelowEleven(item.sellIn) && this.isQualityBelowMax(item.quality)) {
      this.increaseQuality(item);
    }

    if (this.isSellInBelowSix(item.sellIn) && this.isQualityBelowMax(item.quality)) {
      this.increaseQuality(item);
    }

    if (this.isSellInBelowZero(item.sellIn)) {
      this.resetQuality(item);
    }
  }

  private isQualityBelowMax(quality: number): boolean {
    return quality < this.maxQuality;
  }

  private isQualityAboveMinQuality(quality: number): boolean {
    return quality > this.minQuality;
  }

  private isSellInBelowEleven(sellIn: number): boolean {
    return sellIn < 11;
  }

  private isSellInBelowSix(sellIn: number): boolean {
    return sellIn < 6;
  }

  private isSellInBelowZero(sellIn: number): boolean {
    return sellIn < 0;
  }

  private reduceSellIn(item: Item): void {
    item.sellIn--;
  }

  private increaseQuality(item: Item): void {
    item.quality++;
  }

  private reduceQuality(item: Item): void {
    item.quality--;
  }

  private resetQuality(item: Item): void {
    item.quality = 0;
  }
}