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
