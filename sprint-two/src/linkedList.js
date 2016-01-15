var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    
    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  list.removeHead = function(){
    var temp = this.head;
    this.head = this.head.next;
    return temp.value;
  };

  list.contains = function(target){
    var test = false;

    var testNode = function(currentNode) {
      if (currentNode.value === target) {
        test = true;
        return;
      }
      if (currentNode.next) {
        testNode(currentNode.next);
      }
    };

    testNode(this.head);
    return test;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
