
$(document).ready(function(){

  $(".fancy").chosen();

  $(".browseArea").hide();

  $(".magnify").click(function() {
    $(".browseArea").show();
  });

  $(".close").click(function() {
    $(".browseArea").hide();
  });

});


