var BinarySearchTree = function(value){
  var newTree = Object.create(BinarySearchTree.prototype);

  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  return newTree;
};

BinarySearchTree.prototype.insert = function(value) {
  if(value > this.value) {
    if(this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.insert.call(this.right, arguments[0]);
    }
  } else {
    if(this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.insert.call(this.left, arguments[0]);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  var result = false;
  var searchNodes = function(root) {
    if(root.value === value) {
      result = true;
      return;
    } 
    if(root.value > value && root.left !== null) {
      searchNodes(root.left);
    } else if(root.value < value && root.right !== null) {
      searchNodes(root.right);
    } else {
      return;
    }
  };
  searchNodes(this);
  return result;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
