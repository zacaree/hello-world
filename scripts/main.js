
$(document).ready(function() {

  $('.section-tabs .tabs li').on('click', function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    var panelToShow = $(this).attr('data-tab');
    alert(panelToShow);
  });

});






// $(document).ready(function() {
//
//   $('ul').on('click', function() {
//     $(this).find('li').filter(':first').toggleClass('blue');
//   })
//
// });






// Panels
$(document).ready(function() {

  $('.btn-panel').on('click', function() {
    var panelId = $(this).attr('data-panelid');
    $('#'+panelId).fadeToggle();
  });

});




// Checklist
var checklist = document.getElementById("checklist")

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", editItem);
  inputs[i].addEventListener("blur", updateItem);
  inputs[i].addEventListener("keypress", itemKeypress);
}

function editItem() {
  this.className = "edit";
  var input = this.querySelector("input");
  input.focus();
  input.setSelectionRange(0, input.value.length);
}

function updateItem() {
  this.previousElementSibling.innerHTML = this.value;
  this.parentNode.className = "";
}

function itemKeypress(event) {
  if (event.which === 13) {
    updateItem.call(this);
  }
}




// Calculator
var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add() {
  var one = parseFloat(numOne.value) || 0;
  var two = parseFloat(numTwo.value) || 0;
  var sum = one+two;
  addSum.innerHTML = "Your sum is: "+sum;
};




// Image Row
var pic1a = document.getElementById("pic1a");
var pic2a = document.getElementById("pic2a");
var pic3a = document.getElementById("pic3a");

pic1a.addEventListener("click", picLink);
pic2a.addEventListener("click", picLink);
pic3a.addEventListener("click", picLink);

function picLink() {
  var picId = this.attributes["data-img"].value;
  var pic = document.getElementById(picId);
  if (pic.className === "hide") {
    pic.className = "";
  } else {
    pic.className = "hide";
  }
};
