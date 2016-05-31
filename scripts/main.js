


$(document).ready(function() {

  var $orders = $('#orders');
  var $name = $('#name');
  var $drink = $('#drink');

  var orderTemplate = $('#order-template').html();

  function addOrder(order) {
    $orders.append(Mustache.render(orderTemplate, order));
  }

  $.ajax({
    type: 'GET',
    url: 'http://rest.learncode.academy/api/learncode/friendz',
    success: function(orders) {
      $.each(orders, function(i, order) {
        addOrder(order);
      });
    },
    error: function() {
      alert('Error loading orders.');
    }
  });

  $('#add-order').on('click', function() {

    // order is used in ajax data below
    var order = {
      name: $name.val(),
      drink: $drink.val(),
    };

    $.ajax({
      type: 'POST',
      url: 'http://rest.learncode.academy/api/learncode/friendz',
      data: order,
      success: function(newOrder) {
        addOrder(newOrder);
      },
      error: function() {
        alert('Error saving order.');
      }
    });

  });


  $orders.delegate('.remove', 'click', function() {

    var $li = $(this).closest('li');

    $.ajax({
      type: 'DELETE',
      url: 'http://rest.learncode.academy/api/learncode/friendz/' + $(this).attr('data-id'),
      success: function (){
        $li.fadeOut(300, function() {
          $(this).remove();
        });
      }
    });

  });

});






// jQuery/Ajax Practice
// $(document).ready(function() {
//
//   var $orders = $('#orders');
//   var $name = $('#name');
//   var $drink = $('#drink');
//
//   function addOrder(order) {
//     $orders.append('<li> \
//     name: <strong>'+ order.name +'</strong>, \
//     drink: <strong>'+ order.drink +'</strong> \
//     <button data-id="'+ order.id +'" class="btn btn-danger remove">x \
//     </button> \
//     </li>');
//   }
//
//   $.ajax({
//     type: 'GET',
//     url: 'http://rest.learncode.academy/api/learncode/friendz',
//     success: function(orders) {
//       $.each(orders, function(i, order) {
//         addOrder(order);
//       });
//     },
//     error: function() {
//       alert('Error loading orders.');
//     }
//   });
//
//   $('#add-order').on('click', function() {
//
//     // order is used in ajax data below
//     var order = {
//       name: $name.val(),
//       drink: $drink.val(),
//     };
//
//     $.ajax({
//       type: 'POST',
//       url: 'http://rest.learncode.academy/api/learncode/friendz',
//       data: order,
//       success: function(newOrder) {
//         addOrder(newOrder);
//       },
//       error: function() {
//         alert('Error saving order.');
//       }
//     });
//
//   });
//
//
//   $orders.delegate('.remove', 'click', function() {
//
//     var $li = $(this).closest('li');
//
//     $.ajax({
//       type: 'DELETE',
//       url: 'http://rest.learncode.academy/api/learncode/friendz/' + $(this).attr('data-id'),
//       success: function (){
//         $li.fadeOut(300, function() {
//           $(this).remove();
//         });
//       }
//     });
//
//   });
//
// });




// Basic jQuery slider
$(document).ready(function() {

  // Configuration
  var width = 1140;
  var animationSpeed = 1000;
  var pause = 3000;
  var currentSlide = 1;

  // Cache DOM
  var $slider = $('#slider'); // This only searches the HTML once, right here.
  var $slideContainer = $slider.find('.slides'); // This and the next var, searches the previous var instead of the whole document making things faster
  var $slides = $slideContainer.find('.slide');

  var interval;

  function startSlider(){
    interval = setInterval(function() {
      $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
        currentSlide++;
        if (currentSlide === $slides.length) {
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        };
      });
    }, pause);
  };

  function stopSlider() {
    clearInterval(interval);
  };

  $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

  startSlider();

})




// var myInterval = setInterval(function() {
//   console.log(new Date());
// }, 1000);




// jQuery Tabbed Panel
$(document).ready(function() {

  $('.section-tabs .tabs li').on('click', function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    // Figure out which panel to show
    var panelToShow = $(this).attr('data-tab');

    // Hide current panel
    $('.section-tabs .pan.active').fadeOut(100, showNextPanel);

    // Show next panel
    function showNextPanel() {
      $(this).removeClass('active');

      $('#'+panelToShow).fadeIn(100, function() {
        $(this).addClass('active');
      });
    }
  });
});




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
