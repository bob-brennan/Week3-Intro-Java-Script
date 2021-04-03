/*
Bob Brennan Week 03
1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
*/


var ages = [ 3, 9, 23, 64, 2, 8, 28, 93 ];
var sum = 0;
var last = 0;
var counter = 0;
var avg = 0;

console.log('1-A');
last = ages.length - 1;
console.log('Last minus First ' + ( ages[last] - ages[0] )); 

ages.push (13);
console.log('1-B');
last = ages.length - 1;
console.log('Last minus First ' + ( ages[last] - ages[0] )); 

for (age of ages){
    sum += age;
}
counter = ages.length;
avg = sum / counter;
console.log('1-C');
console.log('Average Ages = ' + avg); 

/*
2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
*/
avg = 0;
sum = 0;
counter = 0;

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
for (name of names){
    sum += name.length;
}
counter = names.length;
avg = sum / counter;
console.log('2-A');
console.log('Average Letter Per Name = ' + avg); 

var fullName = "";
for (name of names){
    fullName = fullName + " " + name;
}
console.log('2-B');
console.log ('Concatenated Names: ' + fullName.trim());


/*
5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
*/

var nameLengths = names.map (function(element){
    return element.length;

});
console.log('5');
console.log (nameLengths);


/*
6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
*/
sum = 0;
for (length of nameLengths){
    sum += length;
}
console.log('6');
console.log ('Sum of Aray Elements: ' + sum);



/*
7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
*/


function wordRepeat (word, counter){
    let result = "";
    for (let i=1; i <= counter; i++){
        result = result + word;
    }
    return result;
}
console.log('7');
console.log ('Christmas repeated 3 times equals ' + wordRepeat("Christmas", 3));


/*
8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
*/

function buildName (firstName, lastName){
    return firstName + " " + lastName;
}

console.log('8');
console.log ('My full name is : ' + buildName("Bob", "Brennan"));


/*
9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
*/

function countNumbers (numList){
    let count = 0;
    for (num of numList){
        count += num;
    }
    if (count > 100)
        return true;
    else
        return false;
    
}

console.log('9');
console.log ('Sum of Ages Array greater than 100 : ' + countNumbers (ages));



/*
10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
*/
function averageNumbers (numList){
    let count = 0;
    for (num of numList){
        count += num;
    }
    return count / numList.length;
    
}

console.log('10');
console.log ('Average of Ages Array : ' + averageNumbers (ages));






/*
11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
*/

function compareArrays (firstList, secondList){
    let avg1 = 0;
    let avg2 = 0;

    avg1 = averageNumbers (firstList);
    avg2 = averageNumbers (secondList);

    //console.log (firstList);
    //console.log (secondList);
    //console.log ("A1: " + avg1 + "  A2: " + avg2);

    if (avg1 > avg2)
        return true;
    else    
        return false;
}

console.log('11');
var otherAges = [ 3, 9, 23, 64, 2, 8, 28, 83 ];
console.log ('Average of Array 1 bigger than 2 : ' + compareArrays (ages, otherAges));



/*
12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
*/

function willBuyDrink (isHotOutside, moneyInPocket){

    if ((isHotOutside) && (moneyInPocket >= 10.50))
        return true;
    else    
        return false;
}

console.log('12');
console.log ('isHot = false and money = 7 yields  :' + willBuyDrink (false, 7));
console.log ('isHot = true and money = 7 yields   :' + willBuyDrink (true, 7));
console.log ('isHot = false and money = 27 yields :' + willBuyDrink (false, 27));
console.log ('isHot = true and money = 27 yields  :' + willBuyDrink (true, 27));

/*
13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
*/

function calcBurden (baseAmt, burdenRate){
    // Calculate the value of a burden rate.
    // Rates are expressed as a decimal percentage
    //
    //Returns the base amount plus the extra burden amount

    return baseAmt + (baseAmt * burdenRate);
}
console.log('13');
console.log ('Base of 100 and 35% burden yields  :' + calcBurden(100, .35));
