  //MUSIC
  var audio = new Audio('http://66.90.91.26/ost/super-mario-compact-disco/wjhvuohlxl/02-super-mario-bros.-theme.mp3');
  audio.play();
  //
  //All of variables.
  var marioList = ["mario", "wario", "question", "item", "peach", "daisy", "yoshi", "bowser", "toad", "boo", "birdo", "shell", "coins"];  
  var word;
  var lives =1;
  var guess;
  var placeholder;
  var correct;
  var wordLength;
  var wordSubstring;
  var wins = 0;
//----------------
function newGame() {
  placeholder = "";
  if (lives == 0) 
  {
    lives = 10;
    wins = 0;
  }
  word = marioList[Math.floor(Math.random() * marioList.length)];
  console.log(word);
  splitWord = word.split("");
  currentWord = 0;
  var html = "Wins: " + wins;
  document.querySelector("#wins").innerHTML = html;
  wordLength = word.length;
  wordSubstring = word.substring;
  //Adding underscores for every character in the phrase. SUCCESS.
  for (var i = 0; i<splitWord.length; i++)
  {
    placeholder = placeholder + "_";
  }
document.getElementById("placeholder").innerHTML = placeholder;
document.getElementById("gamestatus").innerHTML = "Push any key to begin.";
//----------------
}
// Function to transfer keypress to userguess.
document.onkeyup = function(event) {
  var guess;
  var correct = 0;
  var showLetter =[];
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(word);
  var showLetter = showLetter + userGuess;
  for (var i = 0;i<splitWord.length;i++) {
    //If correct.
    if (userGuess == word.substring(i, i + 1)) {
      var audio = new Audio('http://themushroomkingdom.net/sounds/wav/smb2/smb2_coin.wav');
      audio.play();
      correct++;
      placeholder = placeholder.substring(0, i) + userGuess + placeholder.substring(i +1, placeholder.length +1);
      document.getElementById("placeholder").innerHTML = placeholder;
    }
  }
  if (correct == 0)
    {
      lives--;
    }
  if (placeholder.indexOf("_") == -1)
    {
      wins++;
      lives++;
      var audio = new Audio('http://themushroomkingdom.net/sounds/wav/smb3/smb3_1-up.wav');
      audio.play();
      newGame();
    }
  //If you run out of lives, the game restarts.
  if (lives == 0)
    {
      var audio = new Audio('http://themushroomkingdom.net/sounds/wav/smb3/smb3_game_over.wav');
      audio.play();
      newGame();
    }
    var html2 = "Lives: " + lives;
    document.querySelector("#lives").innerHTML = html2;

}
newGame();