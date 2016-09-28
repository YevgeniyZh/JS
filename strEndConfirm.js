function confirmEnding(str, target) {
  var bool=false;
  console.log(str.length-target.length+"  "+str.length);
  console.log(str.substring(str.length-target.length,str.length)+" "+target);
//   console.log(str.substring(str.length-target.length,str.length)===target);
  bool=(str.substring(str.length-target.length,str.length)===target);
  console.log(bool);

  return bool;
}

confirmEnding("Bastian", "n");
confirmEnding("Connor", "n");