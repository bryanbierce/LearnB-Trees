// This will do a depth first crawl through the tree
// It will check that the number of values at each node is less than the order
// It will return true if this holds for all nodes; otherwise it will return false
function minNodeSizeTest(bTree){
  var size = true;
  function traverseTree(bTree){
    size = (bTree.values.length < bTree.order) ? size : false;
    var childLength = bTree.children.length;
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
// It will then return true if the depth is even throughout or false if not
function depthTest(bTree){
  var depth = 0;
  var maxDepth = 0;
  var even = true;
  function traverseTree(bTree){
    depth++;
    var childLength = bTree.children.length;
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

function depthFirstLog(bTree){

}

function isSorted(arr){
  var i = -1;
  while(arr[(++i)+1]){
    if(arr[i] > arr[i+1])return false;
  }
  return true;
}
