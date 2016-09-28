function repeatStringNumTimes(str, num) {
  var additionalStr=str;
  if (num<0){
    return "";
  }
  for (var i=1;i<num;i++)
    {
      additionalStr+=str;
    }
  
  return additionalStr;
}

repeatStringNumTimes("abc", 3);