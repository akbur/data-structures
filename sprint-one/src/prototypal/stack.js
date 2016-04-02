var Stack = function () {
  var someInstance = Object.create(stackMethods);
  someInstance.count = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function () {
  if (this.count) {
    this.count--;
  }
  var temp = this.storage[this.count];
  delete this.storage[this.count];
  return temp;
};

stackMethods.size = function () {
  return this.count;
};
