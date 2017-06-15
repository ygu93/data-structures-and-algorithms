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

// hacker rank alternating characters
function alternatingCharacters(s){
    // Complete this function
    deletions = 0;
    for(var i = 1;i<s.length;i++){
        if(s[i] === s[i-1]){
            deletions++;
        }
    }
    return deletions;
}

// hacker rank beautiful binary string
function minSteps(n, B){
    // Complete this function
    var notPretty = '010'
    var steps = 0;
    var j = 0;
    for(var i =0;i<n;i++){
        if(B[i] === notPretty[j] && j ==2){
            steps++;
            j = 0;
        }else if(B[i] === notPretty[j]){
            j++;
        }else{
           if(B[i] === '0'){
               j = 1;
           }else{
               j = 0;
           }
        }
    }
    return steps;
}

// hacker rank love letter mystery
function theLoveLetterMystery(s){
    // Complete this function
    var reductions = 0;
    var j = s.length - 1;
    for(var i =0;i<j;i++){
        if(s[i] !== s[j]){
            reductions += Math.abs(s.charCodeAt(i) - s.charCodeAt(j));
        }
        j--;
    }
    return reductions
}

// hacker rank anagrams
function anagram(s){
    // Complete this function
    var changes = 0;
    var letters = {};
    if(s.length % 2 > 0){
        return -1;
    }
    for(var i = 0; i<s.length;i++){
        if(i < s.length/2){
            if(letters[s[i]]){
                letters[s[i]]++;
            }else{
                letters[s[i]] = 1;
            }
        }else{
            if(letters[s[i]]){
                letters[s[i]]--;
            }
        }
    }

    Object.keys(letters).forEach(letter => {
        changes+= letters[letter];
    })
    return changes


}

// hacker rank two strings
function twoStrings(s1, s2){
    // Complete this function
    var letters = new Set();
    for(var i =0;i<s1.length;i++){
        letters.add(s1[i])
    }
    for(var j =0;j<s2.length;j++){
        if(letters.has(s2[j])){
            return "YES";
        }
    }
    return 'NO';
}

// hacker rank game of thrones
function gameOfThrones(s){
    // Complete this function
    var letters = {};
    var odd = false;
    for(var i = 0;i<s.length;i++){
        if(letters[s[i]]){
            letters[s[i]]++;
        }else{
            letters[s[i]] = 1;
        }
    }

    var keys = Object.keys(letters);
    for(var j = 0;j<keys.length;j++){
        if(letters[keys[j]] % 2 > 0 && odd){
            return 'NO';
        }else if(letters[keys[j]] % 2 > 0){
            odd = true;
        }
    }
    return 'YES';
}

// hackerrank making anagrams
function makingAnagrams(s1, s2){
    // Complete this function
    var deletions = 0;
    var s1Chars = {};
    for(var i=0;i<s1.length;i++){
        if(s1Chars[s1[i]]){
            s1Chars[s1[i]]++;
        }else{
            s1Chars[s1[i]] = 1;
        }
    }

    for(var j=0;j<s2.length;j++){
        if(s1Chars[s2[j]]){
            s1Chars[s2[j]]--;
        }else{
            deletions++;
        }
    }

    var keys = Object.keys(s1Chars);

    for(var k =0;k < keys.length;k++){
        deletions+= s1Chars[keys[k]];
    }

    return deletions;

}
