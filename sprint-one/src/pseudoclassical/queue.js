var Queue = function () {
  this.count = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function () {
  var temp = this.storage[0];
  delete this.storage[0];
  for (var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  }
  if (this.count) {
    this.count--;
  }
  return temp;
};

Queue.prototype.size = function () {
  return this.count;
};
