var lifesAnswers = [ // INDEX
    "It is certain.", // 0
    "It is decidedly so.", // 1
    "Without a doubt.", // 2
    "Yes – definitely.", // 3
    "You may rely on it.", // 4 
    "As I see it, yes.", // 5
    "Most likely.", // 6
    "Outlook good.", // 7
    "Yes.", // 8
    "Signs point to yes.", // 9
    "Reply hazy, try again.", // 10 
    "Ask again later.",  // 11
    "Better not tell you now.", // 12 
    "Cannot predict now.",// 13
    "Concentrate and ask again.", // 14
    "Don't count on it.", // 15
    "My reply is no.", // 16
    "My sources say no.", // 17
    "Outlook not so good.", // 18
    "Very doubtful." // 19
];

function oracle(){
  // CHOOSE A RANDOM NUMBER BETWEEN 0 - 19
  var randomIndex = Math.floor(Math.random() * 20); // 0~.999999 * 20 => 0 ~ 19.999999
  // USING THE RANDOM NUMBER, GRAB THE RANDOM ANSWER
  var randomAnswer = lifesAnswers[randomIndex]
  // DISPLAY THE TEXT TO THE USER
  var element = document.querySelector(".output");
  element.innerText = randomAnswer
}