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

// Example number one:
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

// Example number Tow:
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch(val){
    case 'bob':
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      breake;
    case 7:
      answer = "Ate Nine";
      break;
  }
  // Only change code above this line
  return answer;
}

chainToSwitch(7);
// switch case end
// album recorde

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if(prop !== 'tracks' && value && !(records[id].hasOwnProperty(prop))){
    records[id][prop] = value;
    return records;

  } else if(prop === 'tracks' && !(records[id].hasOwnProperty('tracks')) && value){
    records[id][prop] = [value];
    return records;

  } else if(prop === 'tracks' && value){
    records[id][prop].push(value);
    return records;


  } else if(!value){
    delete records[id][prop];
    return records;
  }
  
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// end album records
