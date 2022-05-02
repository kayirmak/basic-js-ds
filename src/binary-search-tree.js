const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  } 
}


class BinarySearchTree {
  constructor() {
    this.base = null
  }

  root() {
    return this.base
  }

  add(data) {

    this.base = addWithin(this.base, data)
  
    function addWithin(node, data) {
      if (!node) {
        return new Node(data)
      }
      if (node.data === data) {
        return node
      }
      
      if (data < node.data) {
        node.left = addWithin(node.left, data)
        // console.log(node.data, data);
      }
      else {
        node.right = addWithin(node.right, data)
      }

      return node

    }


  }

  has(data) {
    return searchWithin(this.base, data)

    function searchWithin(node, data) {
      if (!node) {
        return false
      }
      
      if (node.data === data) {
        return true
      }

      if (data < node.data) {
        return searchWithin(node.left, data)
      }
      else {
        return searchWithin(node.right, data)
      }
    }
  }

  find(data) {
    return findNode(this.base, data)

    function findNode(node, data) {
      if (!node) {
        return null
      }
  
      if (data === node.data) {
        return node
      }
  
      if (data < node.data) {
        return findNode(node.left, data)
      }
      else {
        return findNode(node.right, data)
      }

    }
  }

  remove(data) {
    this.base = removeNode(this.base, data)

    function removeNode(node, data) {
      if (!node) {
        return null
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      }
      else if (data > node.data) {
        node.right = removeNode(node.right, data)
        return node
      }
      else {
        if (!node.right && !node.left) {
          return null
        }
        if (!node.right) {
          node = node.left
          return node
        }
        if (!node.left) {
          node = node.right
          return node
        }
        
        let minFromRight = node.right
        while (minFromRight.left) {
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data
        node.right = removeNode(node.right, minFromRight.data)
        return node
      }


    }
  }

  min() {
    if (!this.base) {
      return;
    }

    let node = this.base
    while (node.left) {
      node = node.left
    }

    return node.data
  }

  max() {
    if (!this.base) {
      return;
    }

    let node = this.base
    while (node.right) {
      node = node.right
    }

    return node.data
  }
}

const tree = new BinarySearchTree();
      tree.add(9);
      tree.add(14);
      tree.add(2);
      tree.add(6);
      tree.add(128);
      tree.add(8);
      tree.add(31);
      tree.add(54);
      tree.add(1);
      tree.remove(14);
      tree.remove(8);
      tree.remove(9);

      console.log(tree.has(14));
      console.log(tree.has(8));
      console.log(tree.has(9));
      console.log(tree.has(2));
      console.log(tree.has(6));
      console.log(tree.has(128));
      console.log(tree.has(31));
      console.log(tree.has(54));
      console.log(tree.has(1));

// console.log(tree.root().data);
// console.log(tree.min());
// console.log(tree.max());
// console.log(tree.remove(5));
// console.log(tree.has(128));
// console.log(tree.find(2));
// console.log(tree.max());


module.exports = {
  BinarySearchTree
};