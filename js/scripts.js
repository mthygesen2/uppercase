$(function(){

  $("form#uppercase").submit(function(event) {

    var upperString = $("input#upperstring").val().toUpperCase();
    
    $(".uppertext").text(upperString);

    $("p").show();
    event.preventDefault();
  });

});
  // var upperString.toUpperCase() = var upperString;
