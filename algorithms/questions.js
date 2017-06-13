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
