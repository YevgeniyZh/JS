
function largestOfFour(arr) {
  var newArr=[];
  var temp=0;
  var count=0;
  for (var i=0;i<arr.length;i++)
    {
      for (var j=0;j<arr[i].length;j++)
        {
          
          if(temp<arr[i][j])
            {
              temp=arr[i][j]; 
              newArr[i]=temp;
              console.log(newArr);
            }
        }
      temp=0;
    }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

