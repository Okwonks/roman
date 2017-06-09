//business logic
var convertNumber = function(num) {

  var decimalNumber = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var result = "";
  if (num <= 3999) {
  for (index = 0; index <= decimalNumber.length; index++) {
    while (decimalNumber[index] <= num) {
      result += romanNumeral[index];
      num -= decimalNumber[index];
    }
  }
return result;
  } else {
    return "not a roman number";
  }
};
  //user interface logic
$(document).ready(function(){
    $("form#roman-1").submit(function(event) {
        event.preventDefault();
          var input = parseInt($("input#roman").val());
          var romanised = convertNumber(input);

          $(".roman").text(romanised);

         $("#answer").fadeIn(2000).fadeOut(6000);
        });
      });
