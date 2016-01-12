$(function() {
  $('#blanks form').submit(function(event) {
    var nameInput = $("input#name").val();
    var prizeInput = $("input#prize").val();
    var amountInput = $("input#amount").val();
    var locationInput = $("input#location").val();

    $('.name').text(nameInput);
    $('.prize').text(prizeInput);
    $('.amount').text(amountInput);
    $('.location').text(locationInput);

    $('#letter').show();

    event.preventDefault();
  });
});
