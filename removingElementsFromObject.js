function destroyer(arr) {
  
  arr=arguments[0].filter(removeValues.bind(arr,arguments[1],arguments[2],arguments[3]));
  return arr;
}
function removeValues(el1,el2,el3,obj){
  console.log("object:"+obj+" el1:" +el1+" el2:"+el2+" el3:"+el3);
  if(obj===el1)
     {
     return false;
     }
     else if (obj===el2)
      {
     return false;
      }
  else if (obj===el3)
      {
     return false;
      }
  else 
  return true;
}
    
  

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// destroyer(["tree", "hamburger", 53], "tree", 53);