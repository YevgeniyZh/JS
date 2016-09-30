function mutation(arr) {
  var bool;
  
  var str=arr[0];
  var contain=arr[1];
  str=str.toLowerCase();  
  contain=contain.toLowerCase();
  
  for (var i=0;i<contain.length;i++)
    {
      console.log(str+" "+contain.charAt(i)+" "+str.includes(contain.charAt(i)));
      if (str.includes(contain.charAt(i))===false){
        
        bool=false;
        return bool;
      }
      else {
        bool=true;
      }
    }
  
  return bool;
}

mutation(["hello", "hey"]);