/*You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.

Solution

Create a combination array.
For every coin in coin array,
If index in combination array >= coin
   combination [index] = combination [index] + combination [index-coin];
*/

function coinChange(amount, coinArray){
    var combinations = new Array(amount + 1);
    combinations[0] = 1;
    for(var i = 1; i < combinations.length; i++){
        combinations[i] = 0;
    }
    for(var coin of coinArray){
        for(var i = 1; i < combinations.length; i++){
            if(i>=coin)
               combinations[i] = combinations[i] + combinations[i-coin];
        }
    }

    console.log(combinations[amount]);
}

coinChange(5, [1,2,5]);