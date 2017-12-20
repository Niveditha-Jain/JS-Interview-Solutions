/*Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:

Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.
Example:

Input: "cbbd"

Output: "bb"*/

var longestPalindrome = function(s) {
    if(s.length === 0)
        return null;
    if(s.length === 1)
        return s;
    var matrix = new Array(s.length);
    for(var i = 0; i < s.length; i++){
        matrix[i] = new Array(s.length);
    }
    var count = 1;

    for(var i = 0 ; i < s.length; i++){
        matrix[i][i] = true;
    }

    var start = 0;
    for(var i = 0 ; i < s.length-1; i++){
        if(s.charAt(i) === s.charAt(i+1)){
           matrix[i][i+1] = true;
           count = 2;
           start = i;
        }
    }

    for(var k = 3; k<=s.length; ++k){
        for(var i = 0; i < s.length-k+1; ++i){
            j = i+k-1;
            if(s.charAt(i) === s.charAt(j) && (matrix[i+1][j-1]===true)){
                matrix[i][j] = true;
                if(k > count){
                    start = i;
                    count = k;
                }
            }
        }
    }
    return s.substring(start, start+count);
};
