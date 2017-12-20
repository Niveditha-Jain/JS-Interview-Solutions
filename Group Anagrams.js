/*
Given an array of strings, group anagrams together.

For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
Return:

[
  ["ate", "eat","tea"],
  ["nat","tan"],
  ["bat"]
]

*/
var groupAnagrams = function(strs) {
    var map = {};
    var strArr = strs;
   // var strArr = strs.split('');
    strs.forEach(function(str){
       var sorted = str.split('').sort().join('');
        if(map.hasOwnProperty(sorted)){
            map[sorted].push(str);
        }else{
            var newArr = [];
            newArr.push(str);
            map[sorted] = newArr;
        }
    });

    var result = [];
    for(var key in map){
        if(map[key].length > 0){
            result.push(map[key]);
        }
    }
    return result;
};