function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, tree.value )

}

// function findClosestValueInBstHelper(tree, target, closest){
//     if(currentNode === null) return closest;
//     let currentTree = currentNode;
//     while()
//     if( Math.abs(target - closest) > Math.abs(target - currentNode.value) ){
//       closest = currentNode.value;
//     }
//     if(target < currentTree.value){
//       currentTree = currentTree.left;
//     } else if (target > currentTree.value) {
//       currentTree = currentTree.right;
//     } else {
//       return closest;
//     }
// }


function findClosestValueInBstHelper(tree, target, closest){
  let currentNode = tree;
  while(currentNode !== null){
    if( Math.abs(target - closest) > Math.abs(target - currentNode.value) ){
      closest = currentNode.value;
    }
    if(target < currentNode.value){
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  return closest;
}
// This is the class of the input currentNode. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


const tree = {
    "nodes": [
      {"id": "10", "left": "5", "right": "15", "value": 10},
      {"id": "15", "left": "13", "right": "22", "value": 15},
      {"id": "22", "left": null, "right": null, "value": 22},
      {"id": "13", "left": null, "right": "14", "value": 13},
      {"id": "14", "left": null, "right": null, "value": 14},
      {"id": "5", "left": "2", "right": "5-2", "value": 5},
      {"id": "5-2", "left": null, "right": null, "value": 5},
      {"id": "2", "left": "1", "right": null, "value": 2},
      {"id": "1", "left": null, "right": null, "value": 1}
    ],
    "root": "10"
}
const target = 12;
console.log(findClosestValueInBst(tree, target))