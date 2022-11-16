import { Item, GildedRose } from '../app/gilded-rose';
import { describe, expect, test, beforeEach } from '@jest/globals';

describe('Gilded Rose', () => {
  test('test SellIn value is drecreased', () => {
    const whateverItem = new Item('item1', 10, 0);
    const gildedRose = new GildedRose([whateverItem]);
    gildedRose.updateQuality()
    expect(whateverItem.sellIn).toBe(9);
  })

  test('test Quality value is drecreased', () => {
    const whateverItem = new Item('item1', 1, 10);
    const gildedRose = new GildedRose([whateverItem]);
    gildedRose.updateQuality()
    expect(whateverItem.quality).toBe(9);
  });

  test('test Quality decreases twice as much when SellIn is passed', () => {
    const whateverItem = new Item('item1', 0, 10);
    const gildedRose = new GildedRose([whateverItem]);
    gildedRose.updateQuality()
    expect(whateverItem.quality).toBe(8);
  });

  test('test quality value is never negative', () => {
    const whateverItem = new Item('item1', 0, 0);
    const gildedRose = new GildedRose([whateverItem]);
    gildedRose.updateQuality()
    expect(whateverItem.quality).toBe(0);
  });

  test('test Aged Brie increases quality with age', () => {
    const agedBrieItem = new Item('Aged Brie', 2, 4);
    const gildedRose = new GildedRose([agedBrieItem]);
    gildedRose.updateQuality()
    expect(agedBrieItem.quality).toBe(5);
  });

  test('test Aged Brie quality never increases past fifty', () => {
    const agedBrieItem = new Item('Aged Brie', 2, 50);
    const gildedRose = new GildedRose([agedBrieItem]);
    gildedRose.updateQuality()
    expect(agedBrieItem.quality).toBe(50);
  });

  test('test ragnaros never changes', () => {
    const ragnarosItem = new Item('Sulfuras, Hand of Ragnaros', 10, 16);
    const gildedRose = new GildedRose([ragnarosItem]);
    gildedRose.updateQuality();
    expect(ragnarosItem.quality).toBe(16);
    expect(ragnarosItem.sellIn).toBe(10);
  });

  test('test backstage pass increases quality by one if sellin by grater than ten', () => {
    const backstageItem = new Item('Backstage passes to a TAFKAL80ETC concert', 15, 5);
    const gildedRose = new GildedRose([backstageItem]);
    gildedRose.updateQuality();
    expect(backstageItem.quality).toBe(6);
  });

  test('test backstage pass increases quality by two if sellin by smaller than ten', () => {
    const backstageItem = new Item('Backstage passes to a TAFKAL80ETC concert', 7, 5);
    const gildedRose = new GildedRose([backstageItem]);
    gildedRose.updateQuality();
    expect(backstageItem.quality).toBe(7);
  });

  test('test backstage pass increases quality by three if sellin by smaller than five', () => {
    const backstageItem = new Item('Backstage passes to a TAFKAL80ETC concert', 2, 5);
    const gildedRose = new GildedRose([backstageItem]);
    gildedRose.updateQuality();
    expect(backstageItem.quality).toBe(8);
  });

  test('test backstage pass lose value quality after sellIn pasess', () => {
    const backstageItem = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 15);
    const gildedRose = new GildedRose([backstageItem]);
    gildedRose.updateQuality();
    expect(backstageItem.quality).toBe(0);
  })
});