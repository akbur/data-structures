var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);


  var result = this._storage.get(i);

  if (result === undefined || result === null) {
    this._storage.set(i, {});
  }
  this._storage.each(function(obj, index, storage){
    if (index === i) {
      obj[k] = v;
      console.dir(obj);
    }
  });
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(i);
  if(result !== undefined && result !== null) {
    return result[k];
  } else {
    return result;
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
