function bouncer(arr) {
  arr=arr.filter(filterArr);
  return arr;
}
function filterArr(obj){
  console.log(typeof obj);
    if (obj==="" || obj===null || obj===false  || obj===0  || obj===undefined || isNaN(obj))
    {
      if (typeof obj=="string" && obj!==""){
        return true;
      }
      return false;
    }else{
      return true;
    }
  }
bouncer([7, "ate", "", false, 9]);