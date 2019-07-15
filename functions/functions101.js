let greetUser = function() {
  console.log("Hello");
}

//greetUser();

let square = function(num) {
  let result = num * num;
  return result;
}

let value = square(3);
let otherValue = square(10);

//console.log(value);
//console.log(otherValue);


let convertFahrenheitToCelsius = function(far) {
  let celsius = (far - 32) * 5/9;
  return celsius;
}

let num = convertFahrenheitToCelsius(0);

console.log(num);