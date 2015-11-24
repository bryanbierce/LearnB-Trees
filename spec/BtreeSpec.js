/* global bTree, describe, it, expect, should */

describe('Btree()', function () {
  'use strict';
  var bTree;

  // This will do a depth first crawl through the tree
  // It will check that the number of values at each node is less than the order
  // It will return true if this holds for all nodes; otherwise it will return false
  function sizeTest(bTree){
    var size = true;
    function traverseTree(bTree){
      size = (bTree.values.length < bTree.order) ? size : false;
      var childLength = btree.children.length;
      if(childLength){
        for(var i = 0; i < childLength; i++){
          traverseTree(bTree.children[i]);
        }
      }
    };

    traverseTree(bTree);

    return size;
  };
  // This will do a depth first crawl through the tree
  // It will compare all branch end depths to the greatest depth yet found.
  // It will then return true if the depth is even throught or false if not
  function depthTest(bTree){
    var depth = 0;
    var maxDepth = 0;
    var even = true;
    function traverseTree(bTree){
      depth++;
      if(!childLength){
        if(maxDepth === 0){
          maxDepth = depth;
        }else if(maxDepth !== depth){
          even = false;
        }
        depth--;
      }else{
        for(var i = 0; i < childLength; i++){
          traverseTree(bTree.children[i]);
          depth--;
        }
      }
    };

    traverseTree(bTree);
    return even;
  };
  // This will do a depth first crawl through the tree 
  // It will compare the number of children to the order of the tree and check for equality
  // It will return true if all nodes with children are in accordance with the order; otherwise it returns false 
  function dispersionTest(bTree){
    var order = true;
    function traverseTree(bTree){
      var childLength = bTree.children.length;
      if(childLength){
        order = (childLength === bTree.order) ? order : false;
      }
      if(order && childLength){
        for(var i = 0; i < childLength; i++){
          traverseTree(bTree.children[i]);
        }
      }
    };

    traverseTree(bTree);
    return order;
  };

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
  });

  it('each node should contain, at max, 1 less value than it\'s order', function(done){
    bTree.add(7);
    bTree.add(8);
    bTree.add(9);
    expect(sizeTest(bTree)).to.be(true);
    bTree.add(10);
    bTree.add(11);
    bTree.add(12);
    bTree.add(13);
    expect(sizeTest(bTree)).to.be(true);

  });

  it('should have even depth across the tree at all times', function(){
    bTree.add(7);
    bTree.add(8);
    bTree.add(9);
    expect(depthTest(btree)).to.equal(true);
    bTree.remove(9);
    expect(depthTest(btree)).to.equal(true);
    bTree.add(9);
    bTree.add(10);
    bTree.add(11);
    bTree.add(12);
    bTree.add(13);
    expect(depthTest(btree)).to.equal(true);
  });

  it('if a node contains children the number of children should match the tree\'s order', function(){
    bTree.add(7);
    bTree.add(8);
    bTree.add(9);
    expect(dispersionTest(btree)).to.equal(true);
    bTree.remove(9);
    expect(dispersionTest(btree)).to.equal(true);
    bTree.add(9);
    bTree.add(10);
    bTree.add(11);
    bTree.add(12);
    bTree.add(13);
    expect(dispersionTest(btree)).to.equal(true);
  });
});
