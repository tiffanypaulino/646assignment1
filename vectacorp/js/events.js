$(document).ready(function(){
// 16 CLICK METHOD
$(function() {
    $('#btn1').click(function () {
        window.alert("Button has been clicked");
    });
});

    // 17 BIND METHOD
$(function() {
    $('#btn2').bind('click', function () {
        window.alert("Button has been clicked");
    });
});

    // 18 ON METHOD
$(function() {
    $('body').on('click', '#btn3', function () {
        window.alert("Button has been clicked");
    });
});

    // 19 LITERAL NOTATION METHOD
$(function() {
    $('body').on({click: function() {
        window.alert("Button has been clicked");
    }
        }, '#btn4');
});

// 20
$('#square').css({'width': '400px', 'height': '400px', 'border-style':'solid'})
$('square').on({
  click: function(){
$(this).text('Mouse Clicked');
  },
  mouseenter: function(){
  $(this).text('Mouse Enter');
  },
  mouseleave: function(){
$(this).text('Mouse leave');
  },
});

// 20
// $('#square').css({width: "400px", height: '400px', 'border-style': 'solid'});

// $('#square').on({
//  mouseenter: function () {
// $('#mouseenter').text('You have entered the square <br>');
//  },
//  mouseleave: function () {
// $('#mouseleave').replaceWith('You have left the square <br>');
//  },
//  click: function () {
// $('#clickme').replaceWith('You clicked the square');
//  }
// });

// 21
$('#btn21').click(function (e) {
    e.preventDefault();
    $('#btn21').css({color: "red"});
    alert(e.target.nodeName + " is the node triggered");
});

// 22
$(window).resize(function () {
    $('#width span').text($(window).width() + "px");
    $('#height span').text($(window).height() + "px");
});

// 23
    $('#focus').focusin(
        function () {
            $(this).css({'backgroundColor': 'lightgray'});
        });
    $('#focus').focusout(
        function () {
            $(this).css({'backgroundColor': 'white'});
        });

// 24
 $('form').submit(
    function (event) {
       var isValid = true;
       var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
       var email = $("#email").val().trim();
         if (email == "") {
             $("#email").next().text("Please enter a valid email address");
             $("#email").css('border-color', 'red')
              isValid = false;
          } else if ( !emailPattern.test(email)) {
              $("#email").next().text("Please enter a valid email address.");
              isValid = false;
          } else {
              $("#email").next().text("");
              $("#email").css('border-color', 'green')};
          $("#email").val(email);
        var firstName = $("#name").val().trim();
          if (firstName == "") {
            $("#name").next().text("This field is required.");
            $("#name").css('border-color', 'red')
               isValid = false;
          } else {
            $("#name").next().text("");
            $("#name").css('border-color', 'green')};
            $("#name").val(firstName);
          if (isValid == false) {
            event.preventDefault();
          if (firstName == "" || email == "") {
             alert('All fields are required')};
             console.log('Not valid form')};
          if (isValid == true) {
             event.preventDefault();
          console.log('Form submitted')};
            },
    )
}):
