import { AgedBrieItem } from "./aged-brie";
import { BackstagePassesItem } from "./backstage-pasess";
import { DefaultItem } from "./default-item";
import { Item } from "./item";
import { Ragnaros } from "./ragnaros";
import { UpdatableItem } from "./updatable-item";

export class UpdatableItemFactory {
  private static agedBrieName = 'Aged Brie';
  private static backstageConcertName = 'Backstage passes to a TAFKAL80ETC concert';
  private static ragnarosName = 'Sulfuras, Hand of Ragnaros';

  static basedOnItem(item: Item): UpdatableItem {
    switch (item.name) {
      case this.agedBrieName:
        return new AgedBrieItem(item);
        break;
      case this.backstageConcertName:
        return new BackstagePassesItem(item);
        break;
      case this.ragnarosName:
        return new Ragnaros(item);
      default:
        return new DefaultItem(item);
        break;
    }
  }

  static baseOnList(items: Array<Item>): Array<UpdatableItem> {
    return items.map(item => this.basedOnItem(item))
  }
}