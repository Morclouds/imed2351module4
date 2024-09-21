 let text = document.getElementById("title").innerHTML;
  document.getElementById("title").innerHTML =
  text.toUpperCase();
  
  const welcome = "Hi enjoy this"
  const item = "guessing number game "
  console.log(`${welcome} ${item}`)

const minNum = 1;
const maxNum = 30;
const answer = 22;

let attempts = 0;
let guess;
let running = true;

while(running){
guess = window.prompt (` Guess a number between ${minNum} - ${maxNum}`);
guess = Number(guess);
console.log(typeof guess, guess);

if(isNaN(guess)){
window.alert("Please enter a valid number"); 
}

else if(guess < minNum || guess > maxNum){
  window.alert("Please enter a valid number");

}

else{
  attempts++;
  if(guess < answer){
    window.alert( "TOO LOW! TRY AGAIN!");
  }
  else if(guess > answer){
    window.alert("TOO HIGH! TRY AGAIN!");
  }
  else{
    window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`);
    running = false;
  }

  
}
}


