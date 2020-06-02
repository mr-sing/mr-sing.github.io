var secretnumber = 4;
var stringGuess = prompt("guess a number");
var guess = Number(stringGuess);
if(Number(guess) === secretnumber)
{
	alert("you got it!");
}
else if (Number(guess) > secretnumber)
{
	alert("too high! ");
}
else 
{
	alert(" it too low !");
}