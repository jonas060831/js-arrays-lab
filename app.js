/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  

console.log('Exercise 1 result:', foods);

/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

foods.push('pizza')
foods.push('cheeseburger')

console.log('Exercise 2 result:', foods);

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

foods.unshift('taco')

console.log('Exercise 3 result:', foods);

/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

let favFood = foods[1]

console.log('Exercise 4 result:', favFood);

/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/


foods.splice(2, 0, 'tofu') 
//first parameter is the position you want to insert it to 
//second parameter is how many value you want to delete to the right of your
//newly inserted value 0 will keep the old value in the array
// third element is the value you want to add


console.log('Exercise 5 result:', foods);

/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

foods.splice(1, 1, 'sushi', 'cupcake')
//first parameter is the position you want to insert it to 
//second parameter is how many value you want to delete to the right of your
//newly inserted value 0 will keep the old value in the array
// third element is the value you want to add

console.log('Exercise 6 result:', foods);

/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/

let yummy = foods.slice(1, 3)
//first parameter is the index of the value you want to add
//if you did not provide a second parameter it will add all the values
//of the previous array minus the one you are replacing
//second parameter is the index it will stop and not include that index
//to the newly created array

console.log('Exercise 7 result:', yummy);

/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/

let soyIdx = foods.indexOf('tofu')

console.log('Exercise 8 result:', soyIdx);

/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/


let allFoods = foods.join(' -> ')

console.log('Exercise 9 result:', allFoods);

/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/

let hasSoup = foods.includes('soup')

console.log('Exercise 10 result:', hasSoup);


/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

const odds = []

//this is so cool i learn from one of the TA
//binary value of the boolean True is 1 and
//binary value of the boolean False is 0

////if(num % 2) odds.push(num) num % 2 is equals to 1 and if you use 1 in if condition
//it is equivalent to true

//and then i just use ternary operator

nums.forEach(num => !(num % 2) ? null : odds.push(num))
//when the value of num % 2 is 0 then its even right we want to
//capture the values only if its odd so then num % 2 is 0 which is false
//i will make it true by adding ! so the null thing will happen otherwise
//else populate the odds array

console.log('Exercise 11 result:', odds);

/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/

console.log(nums)
const fizz = []
const buzz = []
const fizzbuzz = []


console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

