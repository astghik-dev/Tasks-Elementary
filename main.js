/*//Task1
alert('Hello World!');

//Task2
var name = prompt('What is your name?');

if (name != null) {
    alert('Hello'+' '+name+'!');
}

//Task3
var name = prompt('What is your name?');

if (name == "Alice" || name == "Bobe") {
    alert('Hello'+' '+name+'!');
}

//Task4
var n, number, sum;
n = prompt('Please, enter a number');
number = +n;
sum = 0;
if (number != 0 && isNaN(number) == false ) {
	for (var i = 0; i <= n; i++) {
		sum += i;
	}
	alert(sum);
} else {
	alert ("Please, enter valid number");
}

//Task5
var n, number, sum;
n = prompt('Please, enter a number');
number = +n;
sum = 0;
if (number != 0 && isNaN(number) == false ) {
	for (i = 0; i <= n; i++) {
		if (i%3 == 0 || i%5 == 0) {
			sum += i;
		}
	}
	alert(sum);
} else {
	alert ("Please, enter valid number");
}

//Task6
var n, number, sumOrProd;
n = prompt('Please, enter a number');
number = +n;
sumOrProd = 0;
if (number != 0 && isNaN(number) == false ) {
	
    var r = confirm("For SUM from 1 to your entered number press 'OK' \n For PRODUCT from 1 to your entered number press 'Censel'");
	if (r == true) {
		for (i = 1; i <= n; i++) {
			sumOrProd += i;
		}	
        alert(sumOrProd);
    } else {
		sumOrProd = 1;
		for (i = 1; i <= n; i++) {
			sumOrProd *= i;
		}	
    	alert(sumOrProd);
    }
}

//Task7
for (i = 1; i <= 12; i++) {
	for (j = 1; j <= 12; j++) {
		document.write(i+"*"+j+"="+i*j+"\n");
	}
}

//Task8  //For my PC it is too hard if I use Number.MAX_VALUE instid of 100
for (i = 2; i <= 100 ; i++) {
	var j = 2;
	while (i%j != 0 && j < i) {
		j++;
	}
	if (j == i) {
		document.write(i+"\n");
	}	
}

//Task9
var random, n, number, count;
random = Math.round(Math.random()*100);
n = prompt('Can you guess the secret number from 1 to 100?');
number = +n;
while (number == 0 || isNaN(number) == true || number < 0 || number > 100) {
	n = prompt ("Please, enter valid number");
	number = +n;
}
count = 1;
while (n != random && count<5) {
	if (n < random) {
		n = prompt('The number is higher!');
	} else {
		n = prompt('The number is smaller!');
	}
	count++;
}
if (n == random) {
	alert('Congratulations,You won!');
} else {
	alert('The number is '+random+', you lost!');
}*/

//Task10

var a = new Date();
var currentYear = a.getFullYear();
while (currentYear%4 != 0) {
	currentYear++;
}
for (i = 0; i < 20; i++) {
	console.log(currentYear);
	currentYear += 4;
}