var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.count = 0;
  someInstance.storage = {};

  someInstance.pop = stackMethods.pop;
  someInstance.push = stackMethods.push;
  someInstance.size = stackMethods.size;



  return someInstance;
};

var stackMethods = {};
stackMethods.pop = function() {

};
stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};
stackMethods.size = function() {
  return this.count;
};


