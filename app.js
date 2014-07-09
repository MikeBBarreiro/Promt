

var prompt= require('sync-prompt').prompt;
var name = prompt ('what is your name?');
console.log('name is', name);

var prompt = require('sync-prompt').prompt;
var firstname= prompt('what is your first name');
var last = prompt('what is your last name');
var full=( firstname+" "+last);
console.log('your name is', full);


// This is asking if you are of age to drink!//


var prompt= require('sync-prompt').prompt;
var age = prompt('what is your age ');
console.log('what is your ', age);


if (age < 21) {
  console.log('You are not of age..Nice try ');
} else {
  console.log('You can drink');
}
//what is your dogs  age?//

var age = prompt("What is your dog\'s age? ");
console.log(typeof age);
age = parseInt(age);
console.log(typeof age);


var  humaneAge = age * 7;
console.log('your dog is ' + age + ' years old ');
console.log('your dog is ' + humaneAge + ' years old in humane years ');

//Convert Temp//
//Ask what the user wants, C or F?//
//Asking user what tmp they want to convert?
//outputing the conversion

var scale = prompt('What scale are you using? (F/C)? ');
var temp = prompt('what is the temp? ');

temp = parseInt(temp);
var converted;
var alt;

if(scale === 'F') {
  converted = (temp - 32) * 5/9;
  alt = 'C';
}else{
  converted = (temp * 9/5) + 32;
  alt = 'F';
}
console.log(temp + scale + '->' + converted + alt);

//Calculating your BMI//
//ask for height
//ask for weight
//calculate Bmi
//Output the useres BMI

var height = prompt('What is your height in inches? ');
var weight = prompt('What is your weight? ');

weight = parseInt(weight);
height = parseInt(height);

var BMI = weight/(height * height ) * 703;
console.log( 'your BMI is', BMI.toFixed(1));




