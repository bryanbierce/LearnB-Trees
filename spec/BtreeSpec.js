/* global bTree, describe, it, expect, should */

describe('Btree()', function () {
  'use strict';
  var bTree;

  beforeEach(function (){
    bTree = new Btree(3);
  });

  it('should have methods named "add", "remove" and "contains"', function(){
    expect(bTree.add).to.be.a('function');
    expect(bTree.remove).to.be.a('function');
    expect(bTree.contains).to.be.a('function');
  });

  it('should take a parameter to set the order', function(done){
    expect(typeof bTree.order).to.be.a('number');
    expect(bTree.order).to.be(3);
  });

  it('a node should have a values property that is an array', function(){
    expect(Array.isArray(bTree.values)).to.be(true);
  });

  it('should have a children property that is an array', function(){
    expect(Array.isArray(bTree.children)).to.be.(true);
  });

  it('should be able to add values', function(){
    bTree.add(7);
    bTree.add(9);
    expect(bTree.contains(7)).to.equal(true);
    expect(bTree.contains(9)).to.equal(true);
    bTree.add(10);
    bTree.add(11);
    bTree.add(12);
    bTree.add(13);
    expect(bTree.contains(10)).to.equal(true);
    expect(bTree.contains(11)).to.equal(true);
    expect(bTree.contains(12)).to.equal(true);
    expect(bTree.contains(13)).to.equal(true);
  });

  it('should be able to remove values', function(){
    bTree.add(7);
    bTree.add(9);
    bTree.remove(9);
    expect(bTree.contains(7)).to.equal(true);
    expect(bTree.contains(9)).to.equal(false);
    bTree.add(9);
    bTree.add(10);
    bTree.add(11);
    bTree.add(12);
    bTree.add(13);
    expect(bTree.contains(10)).to.equal(true);
    expect(bTree.contains(11)).to.equal(true);
    expect(bTree.contains(12)).to.equal(true);
    expect(bTree.contains(13)).to.equal(true);
  });

  it('should have nodes & leaves which contain at least 1 less value than it\'s order, unless the root which may have as few as 1', function(){
    bTree.add(7);
    bTree.add(8);
    bTree.add(9);
    expect(minNodeSizeTest(bTree)).to.equal(true);
    bTree.add(10);
    bTree.add(11);
    bTree.add(12);
    bTree.add(13);
    expect(minNodeSizeTest(bTree)).to.equal(true);

  });

  it('should have nodes & leaves which contain at most 2*order-1 values, including the root', function(){
    bTree.add(7);
    bTree.add(8);
    bTree.add(9);
    expect(maxNodeSizeTest(bTree)).to.equal(true);
    bTree.add(10);
    bTree.add(11);
    bTree.add(12);
    bTree.add(13);
    expect(maxNodeSizeTest(bTree)).to.equal(true);
  })

  it('should have even depth across the tree at all times', function(){
    bTree.add(7);
    bTree.add(8);
    bTree.add(9);
    expect(depthTest(bTree)).to.equal(true);
    bTree.remove(9);
    expect(depthTest(bTree)).to.equal(true);
    bTree.add(9);
    bTree.add(10);
    bTree.add(11);
    bTree.add(12);
    bTree.add(13);
    expect(depthTest(bTree)).to.equal(true);
  });

  it('all nodes should have children equal to its number of keys +1', function(){
    bTree.add(7);
    bTree.add(8);
    bTree.add(9);
    expect(dispersionTest(bTree)).to.equal(true);
    bTree.remove(9);
    expect(dispersionTest(bTree)).to.equal(true);
    bTree.add(9);
    bTree.add(10);
    bTree.add(11);
    bTree.add(12);
    bTree.add(13);
    expect(dispersionTest(bTree)).to.equal(true);
  });

  it('should return a sorted array from a depth first log', function(){
    bTree.add(7);
    bTree.add(8);
    bTree.add(9);
    expect(R.compose(isSorted, depthFirstLog)(bTree)).to.equal(true);
    bTree.remove(9);
    expect(R.compose(isSorted, depthFirstLog)(bTree)).to.equal(true);
    bTree.add(9);
    bTree.add(10);
    bTree.add(11);
    bTree.add(12);
    bTree.add(13);
    expect(R.compose(isSorted, depthFirstLog)(bTree)).to.equal(true);
  });

});
