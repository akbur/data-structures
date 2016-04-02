var Stack = function () {
  var someInstance = {};
  someInstance.count = 0;
  someInstance.storage = {};
  someInstance.pop = stackMethods.pop;
  someInstance.push = stackMethods.push;
  someInstance.size = stackMethods.size;
  return someInstance;
};

var stackMethods = {};

stackMethods.pop = function () {
  if (this.count) {
    this.count--;
  }
  var temp = this.storage[this.count];
  delete this.storage[this.count];
  return temp;
};

stackMethods.push = function (value) {
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.size = function () {
  return this.count;
};
