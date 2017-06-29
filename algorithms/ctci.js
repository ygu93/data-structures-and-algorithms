// hacker rank balanced brackets

function isBalanced(expression){
    var stack = [];
    var dict = { ']':'[', '}':'{', ')':'(' }
    for(var i = 0;i<expression.length;i++){
        if(dict[expression[i]]){
            if(dict[expression[i]] !== stack[stack.length-1]){
                console.log('NO');
                return;
            }else{
                stack.pop();
            }
        }else{
            stack.push(expression[i]);
        }
    }
    if(stack.length > 0){
        console.log('NO');
    }else{
        console.log('YES');
    }
}

// hacker rank queue stack
function Queue(){
    this.inStack = [];
    this.outStack =  [];

    this.push = function(n){
       this.inStack.push(n)
    }

    this.pop = function(){
        if(this.outStack.length === 0){
            var n = this.inStack.length
            for(var i = 0;i< n;i++){
                this.outStack.push(this.inStack.pop());
            }
        }
        this.outStack.pop();
    }

    this.peek = function(){
        if(this.outStack.length > 0){
            return this.outStack[this.outStack.length -1];
        }else{
            return this.inStack[0];
        }
    }
}


// hacker rank Trie contacts, fails testcase 5 (due to memory consumption?)
function Trie(){
    this.store = {};
}

Trie.prototype.add = function(name){
        var current = this.store;
        for(var i=0;i<name.length;i++){
            if(current[name[i]]){
                current[name[i]]['wordCount']+=1;
                current = current[name[i]];
            }else{
                current[name[i]] = {'wordCount': 1};
                current = current[name[i]];
             }
        }
    }

Trie.prototype.find = function(name){
        var current = this.store;
        for(var i =0;i<name.length;i++){
            if(current[name[i]]){
                current = current[name[i]];
            }else{
                return 0;
            }
        }

        return current.wordCount;
    }



// hacker rank davis' staircase
var cache = {};
function stairCase(n){
    if(n === 1){
        return 1;
    }else if(cache[n]){
        return cache[n];
    }
    var steps = [1,2,3];
    var count = 0;
    for(var i = 0;i<steps.length;i++){
        var remainder = n - steps[i]
        if(remainder > 0){
            count+= stairCase(remainder);
        }else if(remainder === 0){
            count+=1;
        }
    }
    cache[n] = count;
    return count;
}


// ctci question 1.7
function setZeros(arr){
  var rows = {};
  var columns = {};
  for(var i=0;i<arr.length;i++ ){
    for(var j=0;j<arr[i].length;j++){
      if(arr[i][j] === 0){
        rows[i] = true;
        columns[j] = true;
      }
    }
  }

  for(var i2=0;i2<arr.length;i2++ ){
    for(var j2=0;j2<arr[i2].length;j2++){
      if(rows[i2] || columns[j2]){
        arr[i2][j2] = 0;
      }
    }
  }

  return arr;
}
