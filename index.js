$(document).ready(function() {
  $('button').click(function () {

  var product = $('#productcost').val();
  var customer = $('#custamount').val();
  var sum = (customer % product).toFixed(2);


  alert(sum);



  }) //end of click
}); //end of .ready
