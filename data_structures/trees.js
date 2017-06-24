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
