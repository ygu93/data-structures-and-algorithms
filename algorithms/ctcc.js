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
