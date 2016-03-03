// This will do a depth first crawl through the tree
// It will check that the number of values at each node is less than the order
// It will return true if this holds for all nodes; otherwise it will return false
function minNodeSizeTest(node, child){
  var size = (child && node.values.length >= node.order-1) ? size : false;
  if(!size) return false;

  for(var i = 0; i < childLength; i++){
    if( !minNodeSizeTest(node.children[i], true) ) return false;
  }

  return true;
};

// This will do a depth first crawl through the tree
// It will compare all branch end depths to the greatest depth yet found.
// It will then return true if the depth is even throughout or false if not
function depthTest(node, depth, maxDepth){
  depth = depth || 0;
  maxDepth = maxDepth || [];
  if(!node.children.length) {
    if(!maxDepth.length) maxDepth.push(depth);
    return maxDepth[0] === depth;
  }
  for(var i = 0; i < node.children.length; i++){
    if( !depthTest(node.children[i], depth+1, maxDepth) ) return false;
  }

  return true;
};
// This will do a depth first crawl through the tree
// It will compare the number of children to the order of the tree and check for equality
// It will return true if all nodes with children are in accordance with the order; otherwise it returns false
function dispersionTest(node) {
  if(node.children) {
    if(node.children.length !== node.values.length+1) return false;
    for(var i=0; i < node.children.length; i++) {
      if(!dispersionTest(node.children[i])) return false;
    }
  }
  return true;
};

function depthFirstLog(node, log) {
  log = log || [];
  if(!node.children.length) log = log.concat(node.values);
  else {
    for(var i= 0; i < node.values.length; i++) {
      depthFirstLog(node.children[i], state);
      log.push(node.values[i]);
    }
    depthFirstLog(node.children[i+1]);
  }
  return log;
}

function isSorted(arr) {
  var i = -1;
  while(arr[(++i)+1]){
    if(arr[i] > arr[i+1]) return false;
  }
  return true;
}
