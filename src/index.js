module.exports = function check(str, bracketsConfig) {
  let bracketsObject = {};
  let brackets = [];
  let arr = str.split("");
  for(let i = 0; i < bracketsConfig.length; i++) {
    bracketsObject[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === (brackets[brackets.length-1] || 0)) {
      brackets.pop();
    }
    else {
      brackets.push(bracketsObject[arr[i]]);
    }
  }
  if(!brackets.length) {
    return true;
  }
  else {
    return false;
  }
}
