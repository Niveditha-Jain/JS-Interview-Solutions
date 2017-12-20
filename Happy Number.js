/*
A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 19 is a happy number

12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

*/

var isHappy = function(n) {
    var map = {};
    while(!map.hasOwnProperty(n)){
        map[n] = true;
        var sum = 0;
        while(n>0){
            var rem = n % 10;
            sum = sum + rem * rem;
            n = Math.floor(n/10);
        }
        if(sum === 1)
            return true;
        else
             n = sum;
    }
    return false;
};