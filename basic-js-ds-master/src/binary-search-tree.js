const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const node = new Node(data);

    if (this.rootNode === null) {
      this.rootNode = node;
      return;
    }

    let currentNode = this.rootNode;

    while (currentNode !== null) {
      if (data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = node;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = node;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    let currentNode = this.rootNode;

    while (currentNode !== null) {
      if (currentNode.data === data) {
        return true;
      }

      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  find(data) {
    let currentNode = this.rootNode;

    while (currentNode !== null) {
      if (currentNode.data === data) {
        return currentNode;
      }

      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return null;
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (node === null) {
        return null;
      }

      if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null;
        }

        if (node.left === null) {
          return node.right;
        }

        if (node.right === null) {
          return node.left;
        }

        let tempNode = node.right;

        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }

        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);

        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };

    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    let current = this.rootNode;

    while (current.left) {
      current = current.left;
    }

    return current.data;
  }



  max() {
    let current = this.rootNode;

    while (current.right) {
      current = current.right;
    }

    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};
