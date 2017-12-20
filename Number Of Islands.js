/*
Given a 2-d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1: 11110 11010 11000 00000

Answer: 1

Example 2: 11000 11000 00100 00011

Answer: 3

*/

function numberOfIslands(input){
  var count = 0;
  for(var i=0;i<input.length;++i){
    for(var j=0; j<input[0].length;j++){
      if(input[i][j]=== 1){
         count++;
         clearLand(input, i, j);
      }
    }
  }
  console.log(count);
}

function clearLand(array, i, j){
  if( i < 0|| j<0||i >= array.length || j >= array[i].length || array[i][j] == '0')
    return

  array[i][j] = 0;
  clearLand(array, i , j+1);
  clearLand(array, i , j-1);
  clearLand(array, i+1 , j);
  clearLand(array, i-1 , j);
  return
}
