// version 1   while
 var std = [];
function open(c){
 var dict = { 1:"(", 2:"[", 3:"{"};
 var getkeys = Object.values(dict);
 var temp = c;
 for(var j of getkeys){
    if(j === temp){
     return true;
    }
   }
}// end open
function close(c){
 var dict = { 1:")", 2:"]", 3:"}"};
 var getkeys = Object.values(dict);
 var temp = c;
 for(var j of getkeys){
    if(j === temp){
     return true;
    }
 }
}// end close
function couple(x,y){
  var dict = { 1:"{}",2:"()",3:"[]"};
  var val = x+y;
  var getkeys = Object.values(dict);
  for(var i of getkeys){
    if(i === val){
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
isBalance("[](()");

// version 2 For
 var std = [];
function open(c){
 var dict = { 1:"(", 2:"[", 3:"{"};
 var getkeys = Object.values(dict);
 var temp = c;
 for(var j of getkeys){
    if(j === temp){
     return true;
    }
   }
}// end open
function close(c){
 var dict = { 1:")", 2:"]", 3:"}"};
 var getkeys = Object.values(dict);
 var temp = c;
 for(var j of getkeys){
    if(j === temp){
     return true;
    }
 }
}// end close
function couple(x,y){
  var dict = { 1:"{}",2:"()",3:"[]"};
  var val = x+y;
  var getkeys = Object.values(dict);
  for(var i of getkeys){
    if(i === val){
       return true;
    }
   }
}// end couple
function isBalance(s){
var size = s.length;
var deb = 0;
 /*while(deb < size)*/ for(deb = 0; deb < size; deb++){
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
  //deb++;
 } // fin while
 if(std.length === 0){
   return true;
 }
 else{
 return false;
 }
} // end function isBalance.
isBalance("[](()");
