// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
var largest= 0;
numbers.forEach(n => {
	if(largest < n) {
		largest=n;
	}
} );
console.log(largest);

// Find longest string in strings
var longest = "";
strings.forEach(n=> {
  if(longest.length < n.length){
    longest=n;
  }	
});
	
// Find all the even numbers
numbers.filter(n=>n%2==0);
	
// Find all the odd numbers
numbers.filter(n =>n%2!==0);

// Find all the words that contain 'is' use string method 'includes'
strings.filter(str =>str.includes('is'));

// Find all the words that contain 'is' use string method 'indexOf'

// Check if all the numbers in numbers array are divisible by three use array method (every)
var divisible = numbers.every(n => n%3==0);
//  Sort Array from smallest to largest
var small = numbers.sort((a,b) => a-b);
// Remove the last word in strings
strings.pop()
// Add a new word in the array
strings.push('hai')
// Remove the first word in the array
strings.shift()
// Place a new word at the start of the array use (unshift)
strings.unshift('hello')
// Make a subset of numbers array [18,9,7,11]
numbers.splice(3,4);
// Make a subset of strings array ['a','collection']
strings.splice(2,2);
// Replace 12 & 18 with 1221 and 1881
var replaceArr = numbers.map(n=> n==12 ? 1221 : n==18? 1881:n);
// Replace words with string in strings array
var replace = strings.map(str=> str.includes("words")? "strings":str);
// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'
var j = customers.filter(name => name.firstname[0].includes("J"));
// Create new array with firstname and lastname
var first = customers.map(name =>name.firstname+''+name.lastname);
// Sort the array created above alphabetically
var alpha = first.sort((a,b) => (a<b)? -1:1);