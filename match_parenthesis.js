var std = [];
function open(c){
 var dict = { 1:"(", 2:"[", 3:"{"};
 var getkeys = Object.keys(dict);
 var temp = c;
 for(var j of getkeys){
    if(dict[j] === temp){
     return true;
    }
   }
}// end open
function close(c){
 var dict = { 1:")", 2:"]", 3:"}"};
 var getkeys = Object.keys(dict);
 var temp = c;
 for(var j of getkeys){
    if(dict[j] === temp){
     return true;
    }
 }
}// end close
function couple(x,y){
  var dict3 = { 1:"{}",2:"()",3:"[]"};
  var val = x+y;
  var getkeys = Object.keys(dict3);
  for(var i of getkeys){
    if(dict3[i] === val){
       return true;
    }
   }
}// end couple
function isBalance(s){
var size = s.length;
var deb = 0;
 while(deb < size){
  if(open(s[deb])){
    std.push(s[deb]);
    alert("just for test dynamic stack size movement added:" + " "+ std.length);
  }
  if((close(s[deb])) && (std.length === 0)){
   return false;
  }
  else if((close(s[deb])) && (std.length !== 0)){
   let temp = std.pop();
    if(couple(temp,s[deb])){
     alert("just for test dynamic stack size movement substracted:" + " "+ std.length);
    }
    else{
      return false;
    }
  } // fin else if((close(s[deb]) && (std.length !== 0))
  deb++;
 } // fin while
 if(std.length === 0){
   return true;
 }
 else{
 return false;
 }
} // end function isBalance.
isBalance("[]()");
