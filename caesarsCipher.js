
function rot13(str) { // LBH QVQ VG!
  var string="";
  for (var i=0;i<str.length;i++)
    {
      console.log(str.charAt(i)+"--"+str.charCodeAt(i));

      if (str.charCodeAt(i)<65 && str.charCodeAt(i)>31)
        {
          string+=String.fromCharCode(str.charCodeAt(i));
        }
      else if(str.charCodeAt(i)>=65){
        if((str.charCodeAt(i)-13)<65)
          {
            var num=str.charCodeAt(i)-12;
            string+=String.fromCharCode(90-(65-num));
          }
        else 
        string+=String.fromCharCode(str.charCodeAt(i)-13);
      }
     
    }
  return string;
}

// Change the inputs below to test
// rot13(",.1434!A");
rot13("SERR PBQR PNZC");