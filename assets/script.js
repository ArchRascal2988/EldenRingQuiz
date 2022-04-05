var timerEl= document.querySelector("#countdown");
var container= document.querySelector(".currContent");
var hsContainer= document.querySelector(".hsContent");
console.log(timerEl);

var quizQnA= [
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
    {question:"What is the Elden Ring", answer:"Basically, the universe and ultimate reality.", o1: "It's like Tolkien's One Ring.",o2: "Basically, the universe and ultimate reality.",o3: "The friends we made along the way.",o4: "A device that kept the flow of death, time, and energy."}
]
const startingTime= 60;

function init(){
    firstIteration();
}

function firstIteration(){
    //generate page content on startup. ADD HIGHSCORES LATER
    timerEl.innerHTML= "Time left: "+ startingTime;
    container
}

function countDown(){
    var time= startingTime;
    setInterval(function(){
        time--;
        timerEl.innerHTML= "Time left: "+ time;
    }, 1000)
    if(time==0){
        youLose();
    }
}

function youLose(){

}

function youWin(){

}

init();