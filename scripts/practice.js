
function go(name, age) {
  if (age < 20) {
    return name+'!';
  } else {
    return name;
  }
}

// alert( go('Zac', 19) );




function plus(firstNum, secondNum) {
  return firstNum + secondNum;
}

// alert( plus(12, 14) );




function hola() {
  alert('hi');
}




var myList = ['apples', 'oranges', 'bananas'];

myList[3] = 'pineapples';

myList[0] = 'watermelon';


// myList.forEach(function(value, index) {
//   console.log(value, index);
//   alert('I have '+value+' in my shopping bag');
// });




///////////
// LOOPS //
///////////

//  var times = 0;

//  while (times <= 10) {
//    console.log('tried it', times);
//    times = times+1;
//  }


for (var i = 0; i < myList.length; i++) {
  console.log('You have '+myList[i]+' in your basket!');
}
