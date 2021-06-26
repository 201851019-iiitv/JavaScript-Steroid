function Totaldays() {
  var birthyear = prompt("Enter the Birth Year");
  let d = new Date();
  let curr = d.getFullYear();
  let Totaldays = (curr - birthyear) * 365;
  document.getElementById(
    "yearintodays"
  ).innerHTML = `<h3>You are ${Totaldays} days old.</h3>`;
}

Reset = () => {
  document.getElementById("yearintodays").innerHTML = "";
};

Quotes = () => {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      // console.log(`${data.content} —${data.author}`)
      document.getElementById(
        "quotes"
      ).innerHTML = `<h4><q><i>${data.content}</i></q></h4><h3>-${data.author}</h3>`;
    });
};

gifGenerator = () => {
  const url =
    "https://api.giphy.com/v1/stickers/random?api_key=0UTRbFtkMxAplrohufYco5IY74U8hOes&tag=funny";
  fetch(url, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((value) => {
      let imageurl = value.data.image_original_url + "";
      var img = document.createElement("img");
      var div = document.getElementById("gifImage");
      img.src = `${imageurl}`;
      div.appendChild(img);
      // console.log(div,imageurl);
    });
};

reset = () => {
  document.getElementById("gifImage").innerHTML = "";
};

swg = (value) => {
  let Userchoice = value.id;
  let randomchoice = Math.floor(Math.random() * 3);
  let botchoice;
  if (randomchoice === 0) botchoice = "snake";
  else if (randomchoice === 1) botchoice = "water";
  else botchoice = "gun";

  //console.log(Userchoice,botchoice);

  if (Userchoice === botchoice && botchoice === "snake") {
    document.getElementById(
      "resultswg"
    ).innerHTML = `<img title="you choosen" id="snake" class="first" src="./images/snake.png"></img>
      <div class="status1"> <h3>Match Draw</h3> </div>
      <img title="computer choosen" id="snake" class="second" src="./images/snake.png"></img>`;
  } else if (Userchoice === botchoice && botchoice === "water") {
    document.getElementById(
      "resultswg"
    ).innerHTML = ` <img title="you choosen" id="water" class="first" src="./images/water.jpg" ></img>
      <div class="status1"> <h3>Match Draw</h3> </div>
      <img title="computer choosen" id="water" class="second" src="./images/water.jpg" ></img>`;
  } else if (Userchoice === botchoice && botchoice === "gun") {
    document.getElementById(
      "resultswg"
    ).innerHTML = ` <img title="you choosen" id="gun"  class="first" src="./images/gun.png"></img>
      <div class="status1"> <h3>Match Draw</h3> </div>
      <img title="computer choosen" id="gun"  class="second" src="./images/gun.png"></img>`;
  } else if (Userchoice === "snake" && botchoice === "water") {
    document.getElementById(
      "resultswg"
    ).innerHTML = `<img title="you choosen" id="snake" class="first" src="./images/snake.png"></img>
      <div class="status2"> <h3>You Win</h3> </div>
      <img title="computer choosen" id="water" class="second" src="./images/water.jpg" ></img>`;
  } else if (Userchoice === "snake" && botchoice === "gun") {
    document.getElementById(
      "resultswg"
    ).innerHTML = `<img title="you choosen" id="snake" class="first" src="./images/snake.png"></img>
      <div class="status3"> <h3>You Lose</h3> </div>
      <img title="computer choosen" id="gun" class="second" src="./images/gun.png"></img>
`;
  } else if (Userchoice === "water" && botchoice === "snake") {
    document.getElementById(
      "resultswg"
    ).innerHTML = `<img title="you choosen" id="water"  class="first"src="./images/water.jpg" ></img>
      <div class="status3"> <h3>You Lose</h3> </div>
      <img title="computer choosen"  id="snake" class="second" src="./images/snake.png"></img>`;
  } else if (Userchoice === "water" && botchoice === "gun") {
    document.getElementById(
      "resultswg"
    ).innerHTML = `<img title="you choosen" id="water" class="first" src="./images/water.jpg" ></img>
      <div class="status2">  <h3>You Win</h3></div>
      <img  title="computer choosen" id="gun" class="second" src="./images/gun.png"></img>`;
  } else if (Userchoice === "gun" && botchoice === "water") {
    document.getElementById(
      "resultswg"
    ).innerHTML = `<img id="gun" title="you choosen" class="first" src="./images/gun.png"></img>
      <div class="status3"> <h3>You Lose</h3> </div>
      <img title="computer choosen" id="water" class="second" src="./images/water.jpg" ></img>`;
  } else if (Userchoice === "gun" && botchoice === "snake") {
    document.getElementById(
      "resultswg"
    ).innerHTML = `<img id="gun" title="you choosen" class="first" src="./images/gun.png"></img>
      <div class="status2"><h3>You Win</h3> </div>
      <img title="computer choosen" id="snake" class="second" src="./images/snake.png"></img>`;
  }
};

var buttonscolor = document.querySelectorAll("button");

function buttonColorChanger(data) {
  // store all buttons in variable.

  // Todo :handle reset function
  let copybutton = document.querySelectorAll("button");
  console.log(copybutton);
  console.log("global button");
  console.log(buttonscolor);

  if (data.value === "Yellow") {
    // change all buttons color to yellow.
    for (btn of copybutton) {
      btn.classList.replace(btn.classList[1], "btn-warning");
    }
  }
  if (data.value === "Red") {
    // change all buttons color to red.
    for (btn of copybutton) {
      btn.classList.replace(btn.classList[1], "btn-danger");
    }
  }
  if (data.value === "Green") {
    // change all buttons color to green.
    for (btn of copybutton) {
      btn.classList.replace(btn.classList[1], "btn-success");
    }
  }
  if (data.value === "Primary") {
    // change all buttons color to green.
    for (btn of copybutton) {
      btn.classList.replace(btn.classList[1], "btn-primary");
    }
  }
  if (data.value === "Info") {
    // change all buttons color to green.
    for (btn of copybutton) {
      btn.classList.replace(btn.classList[1], "btn-info");
    }
  }
  if (data.value === "Random") {
    // change all buttons color to random.
    let colorlist = [
      "btn-warning",
      "btn-info",
      "btn-success",
      "btn-primary",
      "btn-danger",
      "btn-secondary",
    ];

    for (btn of copybutton) {
      let randomIndex = Math.floor(Math.random() * 6);
      btn.classList.replace(btn.classList[1], colorlist[randomIndex]);
    }
  }

  //Todo : Reset not working !
  if (data.value === "Reset") {
    // change all buttons color to reset.
    for (let i = 0; i < copybutton.length; i++) {
      copybutton[i].classList.replace(
        copybutton[i].classList[1],
        buttonscolor[i].classList[1]
      );
    }
  }
}

//BlackJack

let blackJack = {
  player1: {
    scoreSpan: "#player1-score",
    div: ".card-img1",
    score: 0,
  },
  player2: {
    scoreSpan: "#player2-score",
    div: ".card-img2",
    score: 0,
  },
  card: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "J", "K", "Q"],
  "cards-value": {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    A: [1, 11],
    J: 10,
    K: 10,
    Q: 10,
  },
  'Hit':'blackJack-hit',
  'Stand':'blackJack-Stand',
  'Deal':'blackJack-Deal',
  'win':0,
  'lose':0,
  'Draw':0,
  'IsStand':false,
  'turnOver':false,
};

const hitsound = new Audio("./sounds/swish.m4a");
const WinSound = new Audio("./sounds/cash.mp3");
const loseSound = new Audio("./sounds/aww.mp3");

document.getElementById("blackJack-hit").addEventListener("click", Hit); // choose random card by user when clicked on hit buttons

document.getElementById('blackJack-Stand').addEventListener('click',Stand); // disable hit buttton

document.getElementById("blackJack-Deal").addEventListener("click", Deal); //play bot and choose random card;

function Hit() {
  if(blackJack['IsStand']==false)
  {
  let randCard = randomCard();
  let activePlayer = "player1";
  show(randCard, activePlayer);
  UpdateScore(randCard, activePlayer);
  showScore(activePlayer,'Hit');
  }
}

function randomCard() {
  let i = Math.floor(Math.random() * 13);

  return blackJack["card"][i];
}

UpdateScore = (card, activePlayer) => {
  //if card='A'
  if (card === "A") {
    // if add 11 below to or equal 21 then add otherwise add 1.

    if (blackJack[activePlayer]["score"] + 11 <= 21)
      blackJack[activePlayer]["score"] +=  blackJack["cards-value"][card][1];
    else blackJack[activePlayer]["score"] +=  blackJack["cards-value"][card][0];
  } else blackJack[activePlayer]["score"] += blackJack["cards-value"][card];

  
};

function show(card, activePlayer) {

  if(blackJack[activePlayer]['score']<=21)
  {
  

  let cardImg = document.createElement("img");
  cardImg.src = `./images/${card}.png`;

  //console.log(blackJack[activePlayer]['div'],"hello");
  document.querySelector(blackJack[activePlayer]["div"]).appendChild(cardImg);
  hitsound.play();
  }
}

function Deal() {
  if(blackJack['turnOver'])
  {
  let player1_img = document
    .querySelector(".card-img1")
    .querySelectorAll("img");

  for (pImage of player1_img) {
    pImage.remove();
  }
  let player2_img = document
    .querySelector(".card-img2")
    .querySelectorAll("img");

  for (pImage of player2_img) {
    pImage.remove();
  }


  blackJack['player2']['score']=0;
  blackJack['player1']['score']=0;

  document.querySelector(blackJack['player1']['scoreSpan']).textContent=0;
  document.querySelector(blackJack['player2']['scoreSpan']).textContent=0;
  document.querySelector(blackJack['player1']["scoreSpan"]).style.color ='#ffffff';
  document.querySelector(blackJack['player2']["scoreSpan"]).style.color ='#ffffff';
  
  document.querySelector('#BlackJack-result').textContent ='Let\'s play';
  
  document.querySelector('#BlackJack-result').style.color ='black';
  blackJack['IsStand']=false;
  blackJack['turnOver']=false;
}

}


function showScore(activePlayer,buttonID) {

   if(blackJack[activePlayer]["score"]>21)
       {
        document.querySelector(blackJack[activePlayer]["scoreSpan"]).textContent ='BUST!!';
        document.querySelector(blackJack[activePlayer]["scoreSpan"]).style.color ='red';
        //document.getElementById(blackJack[buttonID]).disabled=true;    
        // alert('You busted'); 
       }
else
  document.querySelector(blackJack[activePlayer]["scoreSpan"]).textContent =blackJack[activePlayer]["score"];
  //console.log(blackJack[activePlayer]['score']);

}

function sleep(ms){
  return new Promise(resolve =>setTimeout(resolve,ms));
}


async function Stand(){
  blackJack['IsStand']=true;
  while(blackJack['player2']['score']<16 && blackJack['IsStand']==true){
  let randCard = randomCard();
  let activePlayer = "player2";
  show(randCard, activePlayer);
  UpdateScore(randCard, activePlayer);
  showScore(activePlayer,'Stand');
  await(sleep(1000));
  }
  blackJack['turnOver']=true;
  showResult(winner()) 
  

}


//calculate winner.

function winner(){

let score1=blackJack['player1']['score'];
let score2=blackJack['player2']['score'];

let winner;

if(score1<=21){

  if(score1>score2 || score2>21)
  winner='player1'; 
  // when match draw no winner is there.
  else if(score1<score2)
   winner='player2';

}

else if(score1>21){
   
  if( score2<=21)
  winner='player2'; 
  // when match draw no winner is there.

}



return winner;
}
 

function showResult(value){

  let msg,msgCol;


if(value=='player1') {

  msg='You Won !!';
  msgCol='green'; 
  WinSound.play();
  blackJack['win']++;
 }
 else if(value=='player2'){
  msg='You lose !!';
  msgCol='red';
  loseSound.play();
  blackJack['lose']++;
 }
 else{
 
  msg='Match draw !';
  msgCol='yellow';
  blackJack['Draw']++;
 }

 document.querySelector('#BlackJack-result').textContent=msg;
 document.querySelector('#BlackJack-result').style.color=msgCol;
//  document.querySelector('#BlackJack-result').style.fontWeight='bold';
//  document.querySelector('#BlackJack-result').style.fontSize='2rem';
  
 document.querySelector('#wins').textContent=blackJack['win'];
 document.querySelector('#losses').textContent=blackJack['lose'];
 document.querySelector('#draws').textContent=blackJack['Draw'];


}
 

//challenge:7 Guess the number

var comGuess=Math.floor(Math.random()*100)+1; ///1-100
var guesses=[];
function check(){
console.log("clicked check")
  let humanGuess=document.querySelector('input').value;

   //console.log(humanGuess,comGuess)

  if(humanGuess!==""){
     
    if(humanGuess<comGuess){
     document.querySelector('#popup-result').innerHTML=`<div class="alert alert-warning" role="alert">
     <h4>  Please enter a higher number. </h4>
   </div>`  

    }
  else if(humanGuess>comGuess){
    document.querySelector('#popup-result').innerHTML=`<div class="alert alert-danger" role="alert">
    <h4> Please enter a lower number.</h4>
   </div>`  

  }
  else{
    document.querySelector('#popup-result').innerHTML=`<div class="alert alert-success" role="alert">
    <h4> Awesome You Got it correctly.</h4>
  </div>`  

  }

  guesses.push(humanGuess);
  displayGuess();


}
}

function displayGuess(){

  let html=`<ul class="list-group">` ;
  for(guess of guesses)
  {
   html +=`<li class="list-group-item"><h5>You guessed ${guess}</h5></li>` 
  }

  html +=`</ul>`;

  document.querySelector('.history').innerHTML=html;
}

document.querySelector("#guessreset").addEventListener('click',reset);

function reset(){
  console.log("clicked reset");
comGuess=0;
comGuess=Math.floor(Math.random()*100)+1; ///1-100
 guesses=[];
 document.querySelector('.history').innerHTML="";
 document.querySelector('#popup-result').innerHTML="";

}
