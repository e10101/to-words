import { LocaleConfig, LocaleInterface } from '../types';

export default class Locale implements LocaleInterface {
  public config: LocaleConfig = {
    currency: {
      name: '元',
      plural: '',
      symbol: '¥',
      fractionalUnit: {
        name: '分',
        plural: '',
        symbol: '',
      },
    },
    texts: {
      and: '',
      minus: '负',
      only: '',
      point: '点',
    },
    wordsJoinedBy: '',
    namedLessThan1000: false,
    numberWordsMapping: [
      { number: 100000000, value: '亿' },
      { number: 10000, value: '万' },
      { number: 1000, value: '千' },
      { number: 100, value: '百' },
      { number: 90, value: '九十' },
      { number: 80, value: '八十' },
      { number: 70, value: '七十' },
      { number: 60, value: '六十' },
      { number: 50, value: '五十' },
      { number: 40, value: '四十' },
      { number: 30, value: '三十' },
      { number: 20, value: '二十' },
      { number: 10, value: '十' },
      { number: 9, value: '九' },
      { number: 8, value: '八' },
      { number: 7, value: '七' },
      { number: 6, value: '六' },
      { number: 5, value: '五' },
      { number: 4, value: '四' },
      { number: 3, value: '三' },
      { number: 2, value: '二' },
      { number: 1, value: '一' },
      { number: 0, value: '零' },
    ],
    exactWordsMapping: [
      { number: 100, value: '一百' },
      { number: 10, value: '一十' },
    ],
  };
}
