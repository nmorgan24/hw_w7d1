const express = require("express");
const app = express();
const magic8BallResponses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/greeting/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Wow! Hello there, ${name}!`);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  const total = parseFloat(req.params.total); 
  const tipPercentage = parseFloat(req.params.tipPercentage);

  const tipAmount = (total * tipPercentage) / 100;
  res.send(`your tip will be ${tipAmount.toString()} dollars`);
});

app.get("/magic/:question", (req, res) => {
  const question = decodeURIComponent(req.params.question); //decodeURIComponent Gets the unencoded version of an encoded component of a Uniform Resource Identifier (URI).
  const randomResponse =
    magic8BallResponses[Math.floor(Math.random() * magic8BallResponses.length)];

  res.send(
    `<h1>Question: ${question}</h1><h1>Magic 8 Ball Response: ${randomResponse}</h1>`
  );
});

app.get("/fibonacci/:number", (req, res) => {
  const number = parseInt(req.params.number);

  // seeing if the number is a Fibonacci number
  if (isFibonacci(number)) {
    res.send("<h1>Very good. It is Fibonacci.</h1>");
  } else {
    res.send("<h1>I can tell this is not a Fibonacci number.</h1>");
  }
});

function isFibonacci(number) {
  const isPerfectSquare1 =
    isPerfectSquare(5 * number * number + 4) ||
    isPerfectSquare(5 * number * number - 4);

  return isPerfectSquare1;
}

// Function to see if a number is a perfect square
function isPerfectSquare(num) {
  return Math.sqrt(num) % 1 === 0;
}

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});