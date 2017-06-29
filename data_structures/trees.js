// leetcode level order traversal II

var levelOrderBottom = function(root) {
   if(root === null){
       return [];
   }
   var result = [];
   var queue = [root];
   var level;

   while(queue.length > 0){
       var currentLevel = []
       level = [].concat(queue);
       queue = [];
       for(var i =0;i<level.length;i++){
           currentLevel.push(level[i].val);
           if(level[i].left){
               queue.push(level[i].left);
           }

           if(level[i].right){
               queue.push(level[i].right)
           }
       }
       result.unshift(currentLevel)

   }

   return result
};

// leetcode largestValues in a BST row
var largestValues = function(root) {
    if(!root){
        return [];
    }
    var largest = [];
    var queue = [root];
    while(queue.length > 0){
        var row = queue;
        queue = [];
        var max = -Infinity;
        row.forEach(node => {
            if(node.left){
                queue.push(node.left);
            }

            if(node.right){
                queue.push(node.right);
            }
            if(node.val > max){
                max = node.val;
            }
        })
        largest.push(max)
    }

    return largest
};
