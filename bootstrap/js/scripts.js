$(function() {
  $('#blanks form').submit(function(event) {


    var inputInput = $("input#input").val();

    $('.input').text(inputInput.toUpperCase());
     //add toupper

    $('#response').show();


    event.preventDefault();
  });
});
