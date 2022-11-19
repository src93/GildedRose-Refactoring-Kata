import { GildedRose } from '../app/gilded-rose';
import { describe, expect, test, beforeEach } from '@jest/globals';
import { UpdatableItemFactory } from '../app/updatable-item-factory';
import { Item } from '../app/item';

describe('Gilded Rose', () => {
  test('test SellIn value is drecreased', () => {
    const whateverItem = new Item('item1', 10, 0);
    const updatableItem = UpdatableItemFactory.basedOnItem(whateverItem);
    const gildedRose = new GildedRose();
    gildedRose.updateQuality([updatableItem]);
    expect(whateverItem.sellIn).toBe(9);
  })

  test('test Quality value is drecreased', () => {
    const whateverItem = new Item('item1', 1, 10);
    const updatableItem = UpdatableItemFactory.basedOnItem(whateverItem);
    const gildedRose = new GildedRose();
    gildedRose.updateQuality([updatableItem]);
    expect(whateverItem.quality).toBe(9);
  });

  test('test Quality decreases twice as much when SellIn is passed', () => {
    const whateverItem = new Item('item1', 0, 10);
    const updatableItem = UpdatableItemFactory.basedOnItem(whateverItem);
    const gildedRose = new GildedRose();
    gildedRose.updateQuality([updatableItem]);
    expect(whateverItem.quality).toBe(8);
  });

  test('test quality value is never negative', () => {
    const whateverItem = new Item('item1', 0, 0);
    const updatableItem = UpdatableItemFactory.basedOnItem(whateverItem);
    const gildedRose = new GildedRose();
    gildedRose.updateQuality([updatableItem]);
    expect(whateverItem.quality).toBe(0);
  });

  test('test Aged Brie increases quality with age', () => {
    const agedBrieItem = new Item('Aged Brie', 2, 4);
    const updatableItem = UpdatableItemFactory.basedOnItem(agedBrieItem);
    const gildedRose = new GildedRose();
    gildedRose.updateQuality([updatableItem]);
    expect(agedBrieItem.quality).toBe(5);
  });

  test('test Aged Brie quality never increases past fifty', () => {
    const agedBrieItem = new Item('Aged Brie', 2, 50);
    const updatableItem = UpdatableItemFactory.basedOnItem(agedBrieItem);
    const gildedRose = new GildedRose();
    gildedRose.updateQuality([updatableItem]);
    expect(agedBrieItem.quality).toBe(50);
  });

  test('test ragnaros never changes', () => {
    const ragnarosItem = new Item('Sulfuras, Hand of Ragnaros', 10, 16);
    const updatableItem = UpdatableItemFactory.basedOnItem(ragnarosItem);
    const gildedRose = new GildedRose();
    gildedRose.updateQuality([updatableItem]);
    expect(ragnarosItem.quality).toBe(16);
    expect(ragnarosItem.sellIn).toBe(10);
  });

  test('test backstage pass increases quality by one if sellin by grater than ten', () => {
    const backstageItem = new Item('Backstage passes to a TAFKAL80ETC concert', 15, 5);
    const updatableItem = UpdatableItemFactory.basedOnItem(backstageItem);
    const gildedRose = new GildedRose();
    gildedRose.updateQuality([updatableItem]);
    expect(backstageItem.quality).toBe(6);
  });

  test('test backstage pass increases quality by two if sellin by smaller than ten', () => {
    const backstageItem = new Item('Backstage passes to a TAFKAL80ETC concert', 7, 5);
    const updatableItem = UpdatableItemFactory.basedOnItem(backstageItem);
    const gildedRose = new GildedRose();
    gildedRose.updateQuality([updatableItem]);
    expect(backstageItem.quality).toBe(7);
  });

  test('test backstage pass increases quality by three if sellin by smaller than five', () => {
    const backstageItem = new Item('Backstage passes to a TAFKAL80ETC concert', 2, 5);
    const updatableItem = UpdatableItemFactory.basedOnItem(backstageItem);
    const gildedRose = new GildedRose();
    gildedRose.updateQuality([updatableItem]);
    expect(backstageItem.quality).toBe(8);
  });

  test('test backstage pass lose value quality after sellIn pasess', () => {
    const backstageItem = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 15);
    const updatableItem = UpdatableItemFactory.basedOnItem(backstageItem);
    const gildedRose = new GildedRose();
    gildedRose.updateQuality([updatableItem]);
    expect(backstageItem.quality).toBe(0);
  })
});