var timerEl= document.querySelector("#countdown");
var container= document.querySelector(".currContent");

var int;
var index=0;
var score= 10000;

var QnA= [
     {
        question:"What massive happening kicks off the events of the game?",
        answer:"The shattering of the elden ring.",
        o1: "The character creator.",
        o2: "The shattering of the elden ring.",
        o3: "Godwyn the Golden's untimely death.",
        o4: "The halt of the cosmos."
    },
    {question:"What caused the elden ring to shatter?", answer:"The rune of death being stolen.", o1: "The rune of death being stolen.", o2: "Godwyn getting absoloutley merked.",o3: "Marika's wrath.",o4: "The birth of the player character."}, 
    {question:"What is the erdtree?", answer:"A physical manifestation of the elden ring/greater will's power.", o1: "A big ole glowy tree.",o2: "A parasite feeding off of spiritual energy.",o3: "A physical manifestation of the elden ring/greater will's power.",o4: "Where all the jar guys come from."}, 
    {question:"What's the name of your horse?", answer:"Torrent", o1: "Torrens",o2: "Torval",o3: "Torment",o4: "Torrent"},
    {question:"Where does the game take place?", answer:"The Lands Between", o1: "The Lands Between",o2: "Middle Earth",o3: "Lordran",o4: "The Lands Betwixt"}, 
    {question:"Who are the tarnished? (The player character is one of em)", answer:"Former exiles, brought back to become Elden Lord.", o1: "Marika's demigod children.",o2: "Former exiles, brought back to become Elden Lord.",o3: "The merchants scattered about the world.",o4: "Maidens of the Two Fingers"}, 
    {question:"Who was the first Elden Lord?", answer:"Godfrey", o1: "Godfrey",o2: "Godwyn, who again just got absoloutly dumpstered.",o3: "Nepheli Loux",o4: "Radagon"},
    {question:"Which one of these people is not a DIRECT child of Marika?", answer:"Godrick the Grafted", o1: "Lunar Princess Ranni",o2: "Godrick the Grafted",o3: "Malenia the Severed",o4: "Mohg, Lord of Blood"}, 
    {question:"Who are Marika and Radagon?", answer:"Two aspects of the deity that oversaw The Lands Between.", o1: "Two gods that created the Elden Ring.",o2: "Aliens.",o3: "A buch of jerks.",o4: "Two aspects of the deity that oversaw The Lands Between."}, 
    {question:"What is the Elden Ring", answer:"Basically, the universe and its defnitions.", o1: "It's like Tolkien's One Ring.",o2: "Basically, the universe and its defnitions.",o3: "The friends we made along the way.",o4: "A device that kept the flow of death, time, and energy."}
]
var blank= [];
var prevScores= JSON.parse(localStorage.getItem("highscores"));
var scores=blank.concat(prevScores);
const startingTime= 60;
var time= startingTime;

function init(){
    firstIteration();
}

function firstIteration(){
    score= 10000;
    //generate page content on startup. ADD HIGHSCORES LATER
    timerEl.innerHTML= "Time left: "+ time;
    var title= document.createElement("h1");
    var preamble= document.createElement("p");
    var startBtn= document.createElement("button");
    title.innerHTML= "Super Cool Quiz on Elden Ring Lore"
    preamble.innerHTML= "hiiii take my dweeb quiz :) Complete in under 60 seconds and you'll recieve your score. Good Luck!";
    startBtn.innerHTML="START";
    title.setAttribute("class", "title");
    preamble.setAttribute("class", "preamble");
    startBtn.setAttribute("class", "sBtn");
    container.append(title);
    container.append(preamble);
    container.append(startBtn);

    startBtn.addEventListener("click", function(){
        gameStart();
    })
}

function gameStart(){
    document.querySelector(".title").remove();
    document.querySelector(".preamble").remove();
    document.querySelector(".sBtn").remove();
    iterate();
    countDown();
}

function iterate(){
        //generate QnA
        var cQuestion= QnA[index].question;
        var ans= QnA[index].answer;
        var op1=QnA[index].o1;
        var op2=QnA[index].o2;
        var op3=QnA[index].o3;
        var op4=QnA[index].o4;
        var qEl= document.createElement("h1");
        var o1El= document.createElement("button");
        var o2El= document.createElement("button");
        var o3El= document.createElement("button");
        var o4El= document.createElement("button");
        qEl.innerHTML= cQuestion;
        o1El.innerHTML= op1;
        o2El.innerHTML= op2;
        o3El.innerHTML= op3;
        o4El.innerHTML= op4;
        container.append(qEl);
        container.append(o1El);
        container.append(o2El);
        container.append(o3El);
        container.append(o4El);
        //events
        var buttons= Array.from(document.querySelectorAll("button"));
        for(i=0; i<buttons.length;i++){
            buttons[i].addEventListener("click", function(event){
            if(event.target.innerHTML===ans){
                    document.querySelector("h1").remove();
                    for(i=0; i<buttons.length; i++){
                        document.querySelector("button").remove();
                    }
                    if(index<QnA.length-1){
                        index++;
                        iterate();
                    } else{
                        youWin();
                        return;
                    }
                } else{
                    var msg= document.createElement("p");
                    msg.innerHTML= "Wrong Answer, try again.";
                    container.append(msg);
                    setTimeout(function(){
                        document.querySelector("p").remove();
                    }, 1000);
                    time-= 5;
                    score-=500;
                }
            });
        }
}

function countDown(){
    int= setInterval(function(){
        time--;
        timerEl.innerHTML= "Time left: "+ time;
    }, 1000);
    if(time==0){
        youLose();
    }
}

function stoptimer(){
    clearInterval(int);
}

function youLose(){
    stoptimer();
    document.querySelector("h1").remove();
    var buttons= Array.from(document.querySelectorAll("button"));
    for(i=0; i<buttons.length; i++){
        document.querySelector("button").remove();
    }
    var title= document.createElement("h1");
    var rButton= document.createElement("button")
    title.innerHTML= "Sorry that's curtains :(";
    rButton.innerHTML= "Go Back";
    rButton.setAttribute("class", "sBtn");
    container.append(title);
    container.append(rButton);
    rButton.addEventListener("click", function(){
        document.querySelector("h1").remove();
        document.querySelector("button").remove();
        firstIteration();
    });
}

function youWin(){
    score-= time *15;
    stoptimer(); 
    var title= document.createElement("h1");
    var hsButton= document.createElement("button");
    var hsForm=document.createElement("form");
    var hsLabel=document.createElement("label");
    var hsInput=document.createElement("input");
    var hsSubmit=document.createElement("input");
    title.innerHTML= "Congrats :) Your final score is "+score+". Enter below."
    hsButton.innerHTML= "See highscores."
    hsLabel.innerHTML= "Enter Initals: ";
    hsInput.setAttribute("type", "text");
    hsInput.setAttribute("id", "hsInput");
    hsInput.setAttribute("name", "hsInput");
    hsSubmit.setAttribute("type", "submit");
    hsSubmit.setAttribute("value", "Submit");
    container.append(title);
    container.append(hsForm);
    container.append(hsButton);
    hsForm.append(hsLabel);
    hsForm.append(hsInput);
    hsForm.append(hsSubmit);

    hsButton.addEventListener("click", function(){
        window.location.href = "./highscore.html";
    });
    hsForm.addEventListener("submit", function(event){
        event.preventDefault();
        var hs= {
            score: score,
            initals: hsInput.value
        }
        scores.push(hs);
        localStorage.setItem("highscores", JSON.stringify(scores));
        hsInput.value="";
    })
}

if(score<=0){
    youLose();
}


init();