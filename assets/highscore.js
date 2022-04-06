var hsContainer= document.querySelector(".hsContent");

function init(){
    generateContent();
}

function generateContent(){
        var hTitle= document.createElement("h1");
        var hList= document.createElement("ol");
        hTitle.innerHTML="HIGHSCORES";
        hList.setAttribute("class", "hsList");
        hsContainer.append(hTitle);
        hsContainer.append(hList);
    
        var scoreArray= JSON.parse(localStorage.getItem("highscores"));
        if(scoreArray[0]==null){
            scoreArray.splice(0,1);
        }
        for(i=0; i<scoreArray.length;i++){
            var scoreObj= scoreArray[i];
            var liScore= document.createElement("li");
            liScore.innerHTML= scoreObj.initals +": "+ scoreObj.score;
            hList.append(liScore);
        }
}

init();