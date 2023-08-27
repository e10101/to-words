import { cloneDeep } from 'lodash';
import { ToWords } from '../src/ToWords';
import zhCN from '../src/locales/zh-CN';

const localeCode = 'zh-CN';
const toWords = new ToWords({
  localeCode,
});

describe('Test Locale', () => {
  test(`Locale Class: ${localeCode}`, () => {
    expect(toWords.getLocaleClass()).toBe(zhCN);
  });

  const wrongLocaleCode = localeCode + '-wrong';
  test(`Wrong Locale: ${wrongLocaleCode}`, () => {
    const toWordsWrongLocale = new ToWords({
      localeCode: wrongLocaleCode,
    });
    expect(() => toWordsWrongLocale.convert(1)).toThrow(/Unknown Locale/);
  });
});

const testIntegers = [
  [0, '零'],
  [137, '一百三十七'],
  [700, '七百'],
  [901, '九百零一'],
  [910, '九百一十'],
  [980, '九百八十'],
  [1001, '一千零一'],
  [1100, '一千一'],
  [3100, '三千一'],
  [3010, '三千零一十'],
  [3105, '三千一百零五'],
  [4680, '四千六百八十'],
  [32000, '三万二'],
  [63892, '六万三千八百九十二'],
  [86100, '八万六千一百'],
  [792581, '七十九万二千五百八十一'],
  [2741034, '二百七十四万一千零三十四'],
  [86429753, '八千六百四十二万九千七百五十三'],
  [975310864, '九亿七千五百三十一万零八百六十四'],
  [9876543210, '九十八亿七千六百五十四万三千二百一十'],
  // [
  //   98765432101,
  //   'Ninety Eight Billion Seven Hundred Sixty Five Million Four Hundred Thirty Two Thousand One Hundred One',
  // ],
  // [
  //   987654321012,
  //   'Nine Hundred Eighty Seven Billion Six Hundred Fifty Four Million Three Hundred Twenty One Thousand Twelve',
  // ],
  // [
  //   9876543210123,
  //   'Nine Trillion Eight Hundred Seventy Six Billion Five Hundred Forty Three Million Two Hundred Ten Thousand One Hundred Twenty Three',
  // ],
  // [
  //   98765432101234,
  //   'Ninety Eight Trillion Seven Hundred Sixty Five Billion Four Hundred Thirty Two Million One Hundred One Thousand Two Hundred Thirty Four',
  // ],
];

describe('Test Integers with options = {}', () => {
  test.concurrent.each(testIntegers)('convert %d => %s', (input, expected) => {
    expect(toWords.convert(input as number)).toBe(expected);
  });
});

describe('Test Negative Integers with options = {}', () => {
  const testNegativeIntegers = cloneDeep(testIntegers);
  testNegativeIntegers.map((row, i) => {
    if (i === 0) {
      return;
    }
    row[0] = -row[0];
    row[1] = `负${row[1]}`;
  });

  test.concurrent.each(testNegativeIntegers)('convert %d => %s', (input, expected) => {
    expect(toWords.convert(input as number)).toBe(expected);
  });
});
