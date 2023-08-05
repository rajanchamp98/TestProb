//Write a function to find the longest common prefix string amongst an array of strings.
var longestCommonPrefix = function(strs){
  let pref="";
  if(strs.length==0) return pref
  for(let i=0;i<strs[0].length;i++){
    const char=strs[0][i];
      for(let j=0;j<strs.length;j++){
        if(strs[j][i]!==char){
          return pref;
        }
      }
      pref=pref+char;
  }
  return pref;
}
 
 


// Values---------

const strs = ["flower","flow","flight"]
// const strs = ["dog", "racecar", "car"];

const output=longestCommonPrefix(strs); // called function here with value

console.log(output)
