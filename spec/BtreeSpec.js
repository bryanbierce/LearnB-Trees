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

  it('should take a paramater and set an order', function(done){
    expect(bTree.order).to.be.a('number');
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

  it('should have nodes which contain at least 1 less value than it\'s order', function(){
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

  it('should have nodes which contain at most 2*order-1 values', function(){
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

  it('all nodes should have order+1 children', function(){
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
  it('should ')
});
