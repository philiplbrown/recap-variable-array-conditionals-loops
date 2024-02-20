var totalMoney = 1200;
var mangoPrice = 300;
var bananePrice = 200;
var orangePrice = 350;
var applePrice = 250;
// +++++++++++++++++++++++++++
var totalCost = mangoPrice + bananePrice + orangePrice + applePrice;
console.log(totalCost)
// ------------------------------
var backMoney = totalMoney - totalCost;
console.log(backMoney)

var perMangoPrice = 20;
var totalMango = 30;
// ***************************
var totalMangoPrice = perMangoPrice * totalMango;
console.log(totalMangoPrice)
// Division  ////////////////////
var totalOrangePrice = 1200;
var totalOrangeKg = 4;
var division = totalOrangePrice / totalOrangeKg;
console.log(division)
// Reminder %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
var totalMark = 119;
var totalSub = 4;
var reminder = totalMark % totalSub;
console.log(reminder)

// =========================================

var players =['Sakib', 'Tamim', 'Mushi', 'Riad', 'Liton', 'Tanzid'];
console.log(players)
// Find position of an element
var playersPosition = players.indexOf("Mushi");
console.log(playersPosition)
// Set an elements
players[3] = 'Shanto';
console.log(players)
// add an element of the last position
players.push('Virat');
console.log(players)
// remove an element of the last position
players.pop(0);
console.log(players)
// Add an element in first position
players.shift();
console.log(players)
// Add an element in first possition
players.unshift('Dhoni');
console.log(players)



var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log(numbers)
// Find Array value
var number = numbers[5];
console.log(number)
// Find Array Index
var numberIndex = numbers.indexOf(80);
console.log(numberIndex)
// Change Array
numbers[4] = 100;
console.log(numbers)

// While loop
var num = 0;
while(num < 5){
    console.log('Fuck you');
    num = num + 1;
}
var num = 0;
while( num < 8){
    console.log('This is me');
    num ++;
}

// For loop
var chickenGiven = 0;
for( var chickenGiven = 0; chickenGiven < 10; chickenGiven ++){
    console.log('Chicken Den, please1')
}

// Show all even numbers form 412 to 456
var evenNum = 412;
while(evenNum <= 456){
    console.log(evenNum);
    evenNum = evenNum + 2;
}
// Show all odd numbers from 581 to 631
var oddNum = 581;
while(oddNum <= 631){
    console.log(oddNum);
    oddNum = oddNum + 2;
}

// Display numbers between 58 to 92
var num = 58;
while(num <= 92){
    console.log(num);
    num ++;
}

// Display "Ajke amar mon valo nei" for 39 times
for(kacchiGive = 0; kacchiGive < 39; kacchiGive++){
    console.log('Ajke amar mon valo nai');

}


// Declaer an Array for all topics that you have learned last few days display then as output.
var iLearned = ['HTML','HTNL5','CSS3','BOOSTRAP','TWILWDWORD','RESPONSIVE','JAVASCRIPT'];
console.log(iLearned);

// Create an Array for all the mobile phone. Display all the elements of the array by using while loop.

// var allMobile = ['Samsung', 'Poco', 'redmi', 'Oppo', 'Vivo', 'iPhone', 'onePlus'];


// Run a loop from 30 to 86. This loop will stop if the values get higher than 44.
var numbers = ['30','33','36','38','40','44','71','81','86'];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 44){
        break;
    }
    console.log(number)
}


// Write the price of the books that you have. Display the prices if the prices lower than 200.
var books =['120', '130', '150', '180', '200', '220', '250','260'];
for(var i= 0; i < books.length; i++){
    var book = books[i];
    if(book == '200'){
        break;
    }
    console.log(book);
}


// Let's say you have X amount of money, if you have more than 80,000, then you will by a MAC.
 var macPrice = 85000;
 var myMoney = 90000;
 if(macPrice < myMoney){
    console.log("I'll bu a Mac")
 }
var laptopPrice = 55000;
var myBudget = 60000;
if (laptopPrice < myBudget){
    console.log("I'll buy a laptop")
}
var lenovoYogaPrice = 35000
var myTaka = 40000;
if(lenovoYogaPrice < myTaka){
    console.log("I'll buy lenovo Yoga")
}
var usedLaptopPrice = 22000;
var myAmount = 20000;
if(usedLaptopPrice < myAmount){
    console.log("I'll buy a used laptop")
}
else{
    console.log("I will use my mobile")
}
 