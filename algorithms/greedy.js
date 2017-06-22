// hacker rank marcs cake walk

function cakeWalk() {
    var n = parseInt(readLine());
    calories = readLine().split(' ');
    calories = calories.map(Number);
    calories = calories.sort((a,b) => a-b);
    var cupcakes = 0
    var miles = 0;
    for(var i = n-1;i>-1;i--){
        miles+= (calories[i] * Math.pow(2, cupcakes))
        cupcakes+=1;
    }
    console.log(miles);

}

// hackerrank luck balance
function luckBalance(input) {
    //Enter your code here
    var important = [];
    var rest = [];
    input = input.split('\n');
    var k = input[0].split(' ')[1];
    for(var i =1;i<input.length;i++){
        input[i] = input[i].split(' ');
        if(input[i][1] === "1"){
            important.push(parseInt(input[i][0]));
        }else{
            rest.push(parseInt(input[i][0]));
        }
    }

    important = important.sort((a,b) => a-b);
    var luck = 0;
    var fail = important.length - k;
    if(fail < 0){
        fail = 0;
    }
    luck+= important.slice(fail).reduce((acc, val) => acc+val, 0);
    luck -= important.slice(0,fail).reduce((acc, val) => acc+val, 0);
    luck+= rest.reduce((acc, val) => acc+val, 0);
    console.log(luck);

}

// hacker rank mark and toys
function markToys(input) {
    //Enter your code here
    input = input.split('\n');
    var toys = input[1].split(' ').map(num => parseInt(num));
    var k = parseInt(input[0].split(' ')[1]);
    toys = toys.sort((a,b) => a-b);
    var numToys = 0;
    for(var i = 0;i<toys.length;i++){
        if(k - toys[i] < 0){
            console.log(numToys);
            return;
        }
        k-= toys[i];
        numToys++;

    }
    console.log(numToys);

}
