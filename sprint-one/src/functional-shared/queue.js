var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.count = 0;
  someInstance.storage = {};

  someInstance.enqueue = queueMethods.enqueue; 
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};
queueMethods.dequeue = function() {};
queueMethods.size = function() {
  return this.count;
};


