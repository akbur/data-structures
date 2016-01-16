var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[this._storage.length] = item;
};

setPrototype.contains = function(item){
  var result = false;
  _.each(this._storage, function(value) {
    if (value === item) {
      result = true;
    }
  });
  return result;
};

setPrototype.remove = function(item){
  var index = _.indexOf(this._storage, item);
  if (index !== -1) {
    this._storage.splice(index, 1);
  }   
  for (var i = index + 1; i < this._storage.length; i++) {
    this._storage[i-1] = this._storage[i];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
