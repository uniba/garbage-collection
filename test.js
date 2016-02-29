'use strict';

const gc = require('./');
const assert = require('assert');

function date(y, m, d) {
  return new Date(y, m - 1, d);
}

describe('gc(date)', () => {
  it('日曜日はごみを出さない', () => {
    assert.strictEqual(gc(date(2016, 3, 6)), null);
  });

  it('月曜日はごみを出さない', () => {
    assert.strictEqual(gc(date(2016, 3, 7)), null);
  });

  it('火曜日は燃えるごみ', () => {
    assert.strictEqual(gc(date(2016, 3, 8)), 'burnable');
  });

  it('水曜日は資源ごみ', () => {
    assert.strictEqual(gc(date(2016, 3, 9)), 'recyclable');
  });

  it('第1木曜日は燃えないごみ', () => {
    assert.strictEqual(gc(date(2016, 3, 3)), 'nonburnable');
  });

  it('第2木曜日はごみを出さない', () => {
    assert.strictEqual(gc(date(2016, 3, 10)), null);
  });

  it('金曜日は燃えるごみ', () => {
    assert.strictEqual(gc(date(2016, 3, 11)), 'burnable');
  });

  it('土曜日はごみを出さない', () => {
    assert.strictEqual(gc(date(2016, 3, 12)), null);
  });

  it('その週のごみ出し当番を一覧する', () => {
    assert.deepEqual(gc(date(2016, 3, 12), { week: true }), [null, null, 'burnable', 'recyclable', null, 'burnable', null]);
  });
});
