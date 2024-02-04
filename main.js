var userName = "Darren";

if (userName === null) {
    console.log("Hello!")
} else {
    console.log(`Hello, ${userName}!`);
}

var userQuestion = "What is the meaning of Maximoose the dog?";

console.log(userName + ', ' + userQuestion);

var randomNumber = Math.floor(Math.random() * 8);

var eightBall = "";

console.log(randomNumber);

switch(randomNumber) {
    case eightBall = 0:
        eightBall = "He is all knowing.";
        break;
    case eightBall = 1:
        eightBall = "He is all eating.";
        break;
    case eightBall = 2:
        eightBall = "Give him a snack immediately."
        break;
    case 3:
        eightBall = "Feed him - he's probably hungry.";
        break;
    case 4:
        eightBall = "Don't let him get hangry. It's not nice.";
        break;
    case 5:
        eightBall = "He is the master of all.";
        break;
    case 6:
        eightBall = "He is awesome.";
        break;
    case 7:
        eightBall = "He is fluffy and there's nothing you can do about it.";
        break;
    case 8:
        eightBall = "Maximoose is life."
}

console.log(eightBall);
