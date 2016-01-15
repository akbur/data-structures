var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var subTree = Tree(value);
  this.children.push(subTree);
};

treeMethods.contains = function(target){
  var contains = false;
  var findTarget = function(tree) {
    if (tree.value === target) {
      contains = true;
    } else {
      _.each(tree.children, function(tree) {
        findTarget(tree);
      });
    }
  }

  findTarget(this);
  return contains;
};


/*
 * Complexity: What is the time complexity of the above functions?
  addChild: O(1)
  contains: O(n)
 */
