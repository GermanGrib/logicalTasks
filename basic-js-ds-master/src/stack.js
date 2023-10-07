const { NotImplementedError } = require('../extensions/index.js');

/**
 * @example
 */
class Stack {
  constructor() {
    this.stack = []
  }

  push(element) {
    this.stack.push(element)
  }

  pop() {
    return this.stack.pop()
  }

  peek() {
    return this.stack[this.stack.length - 1]
  }
}

module.exports = {
  Stack
};
