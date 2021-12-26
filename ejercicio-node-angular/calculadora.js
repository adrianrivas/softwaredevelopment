
'use strict'

var args = process.argv.slice(2);  //recibe los parámetros que se envian de la consola;

var operation = args[1];
var num1 = parseFloat(args[0]);
var num2 = parseFloat(args[2]);

var result = '\n  Introduce bien los parámetros \n';

if(args.length == 3){
	switch (operation){
		case '+':
			result = 'Suma: ' + parseFloat(num1 + num2);
			break;
		case '-':
			result = 'Resta: ' + parseFloat(num1 - num2);
			break;
		case 'mul':
			result = 'Multiplicación: ' + parseFloat(num1 * num2);
			break;
		case '/':
			result = 'División: ' + parseFloat(num1 / num2);
			break;
	}
}

console.log(result)

