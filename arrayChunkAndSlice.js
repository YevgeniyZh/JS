function chunkArrayInGroups(arr, size) {
  var str;
  var newArr=[];
  
  for(var i=0;i<arr.length;i=i+size){
   str=arr.slice(i,i+size);
    newArr.push(str);
  }

  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);