/*! bTree v0.0.0 - MIT license */
'use strict';

var Btree = function (order) {
  // The order dictates how many childe nodes any node should have
  this.order = order;
  // The number of values held in any node should be at most 1 less than the order
  this.values = [];
  // The depth check and children count check are built to traverse children as an array 
  this.children = [];
  
}

Btree.prototype.add = function(value) {
  
};

Btree.prototype.remove = function() {

};

Btree.prototype.contains = function() {

};

//It may make your life easier to define other methods to assist these 