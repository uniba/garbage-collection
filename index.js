'use strict';

const moment = require('moment');

module.exports = function(date, opts) {
  opts = opts || {};
  const d = moment(date).startOf('week').toDate();
  if (opts.week) {
    let res = [];
    for (let i = 0; i < 7; i++) {
      res.push(detect(moment(d).add(i, 'day').toDate()));
    }
    return res;
  }
  return detect(date);
};

function detect(date) {
  return [burnable, nonburnable, recyclable].reduce((acc, pred) => {
    return pred(date) ? (acc || pred.name) : acc;
  }, null);
}

function burnable(date) {
  var d = date.getDay();
  return d === 2 || d === 5;
}

function nonburnable(date) {
  return nthDayInMonth(date) === 1 && date.getDay() === 4;
}

function recyclable(date) {
  return date.getDay() === 3;
}

function nthDayInMonth(date) {
  return Math.floor((date.getDate() - 1) / 7) + 1;
}
