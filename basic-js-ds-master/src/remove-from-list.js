const { NotImplementedError } = require('../extensions/index.js');

/**
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example

 */
function removeKFromList(l, k) {
  if (!l) {
    return null
  }

  while (l.value === k) {
    l = l.next;
    if (!l) {
      return null
    }
  }

  let current = l;
  while (current.next) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return l;
}

module.exports = {
  removeKFromList
};
