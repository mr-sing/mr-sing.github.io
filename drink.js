var secretnumber = 4;
var stringGuess = prompt("guess a number");
var guess = Number(stringGuess);
if(guess === secretnumber)
{
	alert("you got it!");
}
else if (guess > secretnumber)
{
	alert("too high! ");
}
else 
{
	alert(" it too low !");
}