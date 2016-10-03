function getIndexToIns(arr, num) {
  var indexOfNumberInserted=0;
  arr=arr.sort(compareNumbers);
  console.log(arr.sort(compareNumbers.bind(num)));
  for (var i=0;i<arr.length;i++){
    if (num>arr[i]){
      indexOfNumberInserted=i+1;
    }
  }
  return indexOfNumberInserted;
}
function compareNumbers(a, b,num) {
  return a - b;
}

getIndexToIns([40, 60], 50);

