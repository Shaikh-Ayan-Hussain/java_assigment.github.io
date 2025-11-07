// Chapter #1 (Alerts)

// Task 1
alert("First Name");
alert("Last Name");
alert("Email");
alert("Phone Number");
alert("Password");

// Task 2
alert("You're learning JavaScript!");

// Task 3
alert("I am aley zehra");

// Chapter 2 (Variables for string)

// Task 1
var myVariable;

// Task 2
var myString;
myString = "Hello";

// Task 3
var teamName = "My Team";
alert(teamName);

// Task 4
var bestMan = "Charlie";
bestMan = "David";

// Chapter #3 (Variables for numbers)

// Task 1
var caseQty;

// Task 2
var caseQty;
caseQty = 144;

// Task 3
var num = 9;

// Task 4
var sum;
sum = 2 + 3;

// Task 5
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
alert(orderTotal);

// Task 6
var myNumber = 5;
myNumber = myNumber + 3;

// Chapter #4 (VARIABLE NAMES: LEGAL & ILLEGAL)

// Task 1
var var1, var2, var3;

// Task 2
var myVar;
var $dollarSign;
var _underscore;
var camelCaseVar;
var number1;

// Task 3
document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain numbers, $, _ and letters. For example $my_1stVariable<br>");
document.write("Variables must begin with a letter, $ or _. For example $name, _name or name<br>");
document.write("Variable names are case sensitive<br>");
document.write("Variable names should not be JS keywords");

// Chapter #5 (MATH EXPRESSIONS)

// Task 1
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum);

// Task 2
var num1 = 3;
var num2 = 5;
var subtract = num1 - num2;
var multiply = num1 * num2;
var divide = num1 / num2;
var modulus = num1 % num2;
document.write("Subtraction: " + subtract + "<br>");
document.write("Multiplication: " + multiply + "<br>");
document.write("Division: " + divide + "<br>");
document.write("Modulus: " + modulus);      

// Task 3
var myVar;
document.write("Value after variable declaration is: " + myVar + "<br>");
myVar = 5;
document.write("Initial value: " + myVar + "<br>");
myVar++;
document.write("Value after increment is: " + myVar + "<br>");
myVar = myVar + 7;
document.write("Value after addition is: " + myVar + "<br>");
myVar--;
document.write("Value after decrement is: " + myVar + "<br>");
var remainder = myVar % 3;
document.write("The remainder is: " + remainder);

// Task 4
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is " + totalCost + "PKR");

// Task 5
var number = 4;
document.write("Table of " + number + "<br>");
document.write(number + " x 1 = " + (number * 1) + "<br>");
document.write(number + " x 2 = " + (number * 2) + "<br>");
document.write(number + " x 3 = " + (number * 3) + "<br>");
document.write(number + " x 4 = " + (number * 4) + "<br>");
document.write(number + " x 5 = " + (number * 5) + "<br>");
document.write(number + " x 6 = " + (number * 6) + "<br>");
document.write(number + " x 7 = " + (number * 7) + "<br>");
document.write(number + " x 8 = " + (number * 8) + "<br>");
document.write(number + " x 9 = " + (number * 9) + "<br>");
document.write(number + " x 10 = " + (number * 10));

// Task 6
var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");
var fahrenheit2 = 70;
var celsius2 = (fahrenheit2 - 32) * 5 / 9;
document.write(fahrenheit2 + "°F is " + celsius2 + "°C");

// Task 7
var priceItem1 = 650;
var priceItem2 = 100;
var qtyItem1 = 3;
var qtyItem2 = 7;
var shipping = 100;
var total = (priceItem1 * qtyItem1) + (priceItem2 * qtyItem2) + shipping;
document.write("<h1>Shopping Cart</h1>");
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + qtyItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + qtyItem2 + "<br>");
document.write("Shipping charges " + shipping + "<br><br>");
document.write("Total cost of your order is " + total);

// Task 8
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%");

// Task 9
var usDollars = 10;
var saudiRiyals = 25;
var pkr = (usDollars * 104.80) + (saudiRiyals * 28);
document.write("<h1>Currency in PKR</h1>");
document.write("Total Currency in PKR: " + pkr);

// Task 10
var number = 10;
var result = ((number + 5) * 10) / 2;

// Task 11
var currentYear = 2016;
var birthYear = 1992;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("<h1>Age Calculator</h1>");
document.write("They are either " + age2 + " or " + age1 + " years old");

// Task 12
var radius = 20;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;
document.write("<h1>The Geometrizer</h1>");
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area);

// Task 13
var snack = "chocolate chip";
var currentAge = 15;
var maxAge = 65;
var amountPerDay = 3;
var total = (maxAge - currentAge) * 365 * amountPerDay;
document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("Favourite Snack: " + snack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + amountPerDay + "<br>");
document.write("You will need " + total + " " + snack + " to last you until the ripe old age of " + maxAge);

// Chapter #6 (MATH EXPRESSIONS)

// Task 1
var a = 10;
document.write("The value of a is: " + a + "<br><br>");
document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a);

// Task 2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("result is " + result + "<br><br>");

// Task 3
var name = prompt("Enter your name");
alert("Hello " + name);

// Task 5
var number = prompt("Enter a number for multiplication table");
if (number === null || number === "") {
    number = 5;
}
document.write("Table of " + number + "<br>");
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}

// Task 6
var subject1 = prompt("Enter subject 1 name");
var subject2 = prompt("Enter subject 2 name");
var subject3 = prompt("Enter subject 3 name");
var totalMarks = 100;
var marks1 = parseInt(prompt("Enter obtained marks for " + subject1));
var marks2 = parseInt(prompt("Enter obtained marks for " + subject2));
var marks3 = parseInt(prompt("Enter obtained marks for " + subject3));
var totalObtained = marks1 + marks2 + marks3;
var totalTotal = totalMarks * 3;
var percentage = (totalObtained / totalTotal) * 100;
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td></tr>");
document.write("<tr><td><b>Total</b></td><td><b>" + totalTotal + "</b></td><td><b>" + totalObtained + "</b></td></tr>");
document.write("<tr><td colspan='3'>Percentage: " + percentage + "%</td></tr>");
document.write("</table>");
