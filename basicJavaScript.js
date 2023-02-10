//start javascript basic

// comments:

//This is in-line comment
/*  This is a
  multi-line comment
*/

// Variables:

//variables type are: number, string, boolean, object, array, null, undefined, symbol, bigint.

// using the var keyword to declear a variables:

var myName;
myName = 'Abdulrahim';

// switch case start :
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch(val){
    case 1:
    case 2:
    case 3:
      answer = 'Low';
      break;
    case 4:
    case 5:
    case 6:
      answer = 'Mid';
      break;
    case 7:
    case 8:
    case 9:
      answer = 'High';
      break;
  }


  // Only change code above this line
  return answer;
}

sequentialSizes(1);
// switch case end
