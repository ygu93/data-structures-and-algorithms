// You are given an array of integers both positive and negative. Find the contiguous sequence with the largest sum. Return the sum.

function contiguous_sub_sum(arr){
  var currentSum = 0;
  var max = -Infinity;
  for(var i = 0; i < arr.length; i++){
    currentSum += arr[i];
    if(currentSum > max){
      max = currentSum;
    }else if(currentSum < 0){
      currentSum = 0;
    }
  }
  return max;
}

// word chains, given a start word and an end word, find the chain of words when changing one letter of the word at a time that will get you to the end word and return the length of the chain. return 0 if it cannot be done and all the words in the chain including the end word must be part of the word list
var ladderLength = function(beginWord, endWord, wordList) {
    var visited = {};
    var backTrack = {};
    var queue = [beginWord];
    var answer = 0;
    wordList = new Set(wordList)
    while(queue.length > 0){
        var currentWord = queue.shift();
        visited[currentWord] = true;
        nextWords = changeOneLetter(currentWord);
        for(var i=0;i<nextWords.length;i++){
            if(nextWords[i] === endWord && wordList.has(nextWords[i])){
                answer = 2
                var current = currentWord
                while(current!== beginWord){
                    current = backTrack[current];
                    answer +=1

                }
                return answer
            }

            if(wordList.has(nextWords[i]) && !visited[nextWords[i]]){
                queue.push(nextWords[i]);
                backTrack[nextWords[i]] = currentWord;
                visited[nextWords[i]] = true;
            }
        }
    }
    return answer;

};

function changeOneLetter(word){
    words = [];
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for(var i=0;i<word.length;i++){
        for(var j=0;j<alphabet.length;j++){
            if(word[i] !== alphabet[j]){
                var charArray = word.split('')
                charArray[i] = alphabet[j];
                words.push(charArray.join(''));
            }
        }
    }
    return words
}

// compare the triplets
function triplets(a0, a1, a2, b0, b1, b2){
    // Complete this function
    pointsA = 0;
    pointsB = 0;
    if(a0 > b0){
        pointsA++;
    }else if(a0 < b0){
        pointsB++;
    }

    if(a1 > b1){
        pointsA++;
    }else if(a1 < b1){
        pointsB++;
    }

    if(a2 > b2){
        pointsA++;
    }else if(a2 < b2){
        pointsB++;
    }

    console.log(`${pointsA} ${pointsB}`)
}

// diagonal difference
function diagDiff() {
    // n is number of rows
    var n = parseInt(readLine());
    // a is matrix
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    var firstDiag = 0;
    var secondDiag = 0;
    var pointer1 = 0;
    var pointer2 = n-1;
    for(var i=0;i<n;i++){
        for(var j=0;j<n;j++){
            if(j === pointer1){
                firstDiag+= a[i][j];
            }
            if(j === pointer2){
                secondDiag+= a[i][j];
            }
        }
        pointer1++;
        pointer2--;
    }
    console.log(Math.abs(firstDiag - secondDiag));

}
// hacker rank plus minus
function plusMinus() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var positive = 0;
    var negative = 0;
    var zeros = 0;
    for(var i=0;i<n;i++){
        if(arr[i] > 0){
            positive++;
        }else if(arr[i] < 0){
            negative++;
        }else{
            zeros++;
        }
    }
    console.log(positive/n);
    console.log(negative/n);
    console.log(zeros/n);

}

// hackerrank staircase
function staircase() {
    var n = parseInt(readLine());
    var spaces = ""
    var symbols = "#"
    for(var j =0; j<n-1;j++){
        spaces += " "
    }
    for(var i = 0;i < n;i++){
        console.log(spaces+symbols);
        spaces = spaces.slice(1)
        symbols+="#"
    }
}
// hackerrank birthdayCakeCandles
function birthdayCakeCandles(n, ar) {
    // Complete this function
    var currentMax = 0;
    var count = {};
    for(var i = 0;i<n;i++){
        if(count[ar[i]]){
            count[ar[i]] += 1;
        }else{
            count[ar[i]] = 1;
            if(ar[i] > currentMax){
                currentMax = ar[i];
            }
        }
    }
    return count[currentMax]
}

// hacker rank time conversion
function timeConversion(s) {
    // Complete this function
    var units = s.split(":");
    var hours = units[0];
    var minutes = units[1];
    var seconds = units[2].slice(0,2);
    var period = units[2].slice(2);
    if(period === "PM" && parseInt(hours) < 12){
        hours = (parseInt(hours) + 12).toString();
    }else if(period === "AM" && hours === "12"){
        hours = "00"
    }

    return `${hours}:${minutes}:${seconds}`;
}

// hacker rank in a string
function isHackerrank(s){
    var find = 'hackerrank';
    var i = 0;
    for(var j=0;j<s.length;j++){
        if(s[j] === find[i]){
            i++;
            if(i === 10){
                console.log('YES');
                return
            }
        }
    }
    if(i < 10){
        console.log('NO')
    }
}

// hacker rank mars exploration
function marsExploration() {
    var S = readLine();
    var find = 'SOS';
    var i = 0;
    var count = 0;
    for(var j=0;j<S.length;j++){
       if(S[j] !== find[i]){
           count++;
       }
       i++;
       if(i > 2){
           i = 0;
       }
    }
    console.log(count);

}

// caesar cipher
function caesarCipher() {
    // length of string
    var n = parseInt(readLine());
    // the string
    var s = readLine();
    // the offset
    var k = parseInt(readLine());
    var newStr = "";
    k = k % 26;
    for(var i = 0;i<n;i++){
        var currentCharCode = s.charCodeAt(i);
        var newCharCode;
        if((currentCharCode >= 65 && currentCharCode <=90) || (currentCharCode >=97 && currentCharCode <=122)){
           newCharCode = currentCharCode + k;
            if(currentCharCode > 96 && newCharCode > 122){
                newCharCode -= 26;
            }else if(currentCharCode < 91 && newCharCode > 90){
                newCharCode -=26;
            }
        }else{
            newCharCode = currentCharCode;
        }
        newStr += String.fromCharCode(newCharCode);
    }
    console.log(newStr);

}
