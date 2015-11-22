/* global bTree, describe, it, expect, should */

describe('Btree()', function () {
  'use strict';
  var bTree;

  beforeEach(function () {
    bTree = Btree(3);   
  });
  
  it('should have methods named add, remove and contains', function () {  
    expect(bTree.add).to.be.a('function');
    expect(bTree.remove).to.be.a('function');
    expect(bTree.contains).to.be.a('function');
  });

  it('should take a paramater and set and order', function(done) {
    expect(bTree.order).to.be.a('number');
  });


  it('should be able to add values', function() {
    btree.add(7);
    btree.add(9);
    
    expect(bTree.contains(7)).to.equal(true);
    expect(bTree.contains(9)).to.equal(true);
  });

  it('each node should contain, at max, 1 less value than it\'s order', function(done) {
    bTree.add(7);
    bTree.add(8);
    bTree.add(9);

    expect(bTree.values.length < bTree.order).to.be(true);
  });

  it('should have even depth across the tree', function() {
    

    expect(true).to.equal(false);
  });

});
