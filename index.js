$(document).ready(function() {
  $('button').click(function() { //click event that starts the calculations

    /* this block grabs the numbers inputed into the form boxes, stores them
    in variables. Then it creates a variable after subtracting them from each other. */
    var product = $('#productcost').val();
    var customer = $('#custamount').val();
    var sum = (customer - product).toFixed(2);

    /* This block of code represents the math part. The dollars are taken
    off of the top, and then the remainder is multiplied by 100 to make whole
    numbers. The permutations of change are taken out, and what is left each time
    is stored in the "remainder" variable.  */
    var dollars = Math.floor(sum).toFixed(0);
    var remainder = ((sum - dollars) * 100).toFixed(0);
    var quarters = Math.floor(remainder / 25).toFixed(0);
    remainder %= 25;
    var dimes = Math.floor(remainder / 10).toFixed(0);
    remainder %= 10;
    var nickels = Math.floor(remainder / 5).toFixed(0);
    remainder %= 5;
    var pennies = remainder;

    //The block of code posts the amount of change to the DOM
    $('#dollars').append("Give the customer: " + dollars + " dollars.");
    $('#quarters').append(quarters + " quarters.");
    $('#dimes').append(dimes + " dimes.");
    $('#nickels').append(nickels + " nickels.");
    $('#pennies').append(pennies + " pennies.");

  }); //end of click
}); //end of .ready
