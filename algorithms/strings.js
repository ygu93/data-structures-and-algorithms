// pangrams
// input is the string
function pangrams() {
    // now we can read/parse input
    letters = new Set();
    for(var i=0;i<input.length;i++){
        if((input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122) || (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90)){
            letters.add((input[i].toLowerCase()));
        }

    }

    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for(var j=0;j<26;j++){
        if(!letters.has(alphabet[j])){
            console.log('not pangram');
            return;
        }
    }
    console.log('pangram')
}

// hackerrank funny strings
function funnyString(s){
    // Complete this function
    var j = s.length - 2;
    for(var i = 1;i<s.length;i++){
        var charCodeDiff1 = Math.abs(s.charCodeAt(i) - s.charCodeAt(i-1));
        var charCodeDiff2 = Math.abs(s.charCodeAt(j) - s.charCodeAt(j+1));
        if(charCodeDiff1 !== charCodeDiff2){
            return 'Not Funny';
        }
        j--;

    }
    return 'Funny';
}

// weighted uniform strings
function weightedUniformStrings() {
    // s = string, n = number of testcases
    var s = readLine();
    var n = parseInt(readLine());
    var strValues = new Set();
        var currentStreak;
        for(var i = 0;i<s.length;i++){
            if(s[i] !== s[i-1]){
                currentStreak = 1;
            }else{
                currentStreak ++;
            }
            var currentScore =  (s.charCodeAt(i) - 96) * currentStreak;
            if(!strValues.has(currentScore)){
                strValues.add(currentScore);
            }
        }
    for(var a0 = 0; a0 < n; a0++){
        var x = parseInt(readLine());
        // your code goes here

        if(strValues.has(x)){
            console.log('Yes');
        }else{
            console.log('No');
        }
    }

}

// hacker rank gemstones;
function gemstones(arr){
    // Complete this function
    var count = 0;
    var currentCount = 0;
    var elements = new Set();
    for(var i = 0;i<arr.length;i++){
        if(i === 0){
            for(var j=0;j<arr[i].length;j++){
                elements.add(arr[i][j]);
                count++;
                currentCount++;
            }
        }else{
            var seen = new Set();
            for(var i2=0;i2<arr[i].length;i2++){
                if(elements.has(arr[i][i2]) && !seen.has(arr[i][i2])){
                    currentCount++;
                    seen.add(arr[i][i2])
                }
            }
            elements = seen;
        }
        if(currentCount < count){
            count = currentCount;
        }
        currentCount = 0;
    }
    return count;
}
