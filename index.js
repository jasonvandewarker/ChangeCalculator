$(document).ready(function() {
  $('button').click(function() {

    var product = $('#productcost').val();
    var customer = $('#custamount').val();
    var sum = (customer - product).toFixed(2);

    var dollars = Math.floor(sum).toFixed(0);
    var remainder = ((sum - dollars) * 100).toFixed(0);

    var quarters = Math.floor(remainder / 25).toFixed(0);
    remainder %= 25;
    var dimes = Math.floor(remainder / 10).toFixed(0);
    remainder %= 10;
    var nickels = Math.floor(remainder / 5).toFixed(0);
    remainder %= 5;
    var pennies = remainder;

    $('#dollars').append("Give the customer " + dollars + " dollars.");
    $('#quarters').append("Give the customer " + quarters + " quarters.");
    $('#dimes').append("Give the customer " + dimes + " dimes.");
    $('#nickels').append("Give the customer " + nickels + " nickels.");
    $('#pennies').append("Give the customer " + pennies + " pennies.");

  }); //end of click
}); //end of .ready
