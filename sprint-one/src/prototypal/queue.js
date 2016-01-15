var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.count = 0;
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};
queueMethods.dequeue = function() {
  var temp = this.storage[0];
  delete this.storage[0];
  for(var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  }
  if(this.count) {
    this.count--;
  }
  return temp;
};
queueMethods.size = function() {
  return this.count;
};

