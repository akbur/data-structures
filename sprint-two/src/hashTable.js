var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  //result holds {k1:v1, k2:v2}
  //[[k1, v1], [k2, v2]]

  //get and save storage at i
  // if undefined or null
  //set storage[i] {k, v}
  //else 
  //storage[i][k] = v;



  //check storage at index
  this._storage.each(function(item, index, storage) {
    //if index is empty
    console.log(storage[i]);

    if(storage[i] === undefined || storage[i] === null) {
      //add [{k: v}] to the storage at that index
      this._storage.set(i, {k: v});
    //if there's an object in that index   
    } else {
      var contains = false;
      // go through the objects 
      _.each(storage[i], function(obj) {
        //if the object contains the key
        if (_.contains(obj, k)) {
          contains = true;
          //overwrite the value
          obj[k] = v;
        }
      });
      // if no key equals k
      if (!contains) {
        //push the new object to the array
        storage[i].push({k: v});
      }
    }
    console.log(storage[i]);
  });

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(i);
  if(result !== undefined && result !== null) {
    return result.k;
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
