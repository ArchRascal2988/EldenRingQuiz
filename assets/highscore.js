var hsContainer= document.querySelector(".hsContent");

function init(){
    console.log("1");
    generateList();
    generateContent();
}

function generateList(){

}

function generateContent(){
        console.log("2");
        var hTitle= document.createElement("h1");
        var hList= document.createElement("ol");
        hTitle.innerHTML="HIGHSCORES";
        hList.setAttribute("class", "hsList");
        hsContainer.append(hTitle);
        hsContainer.append(hList);
    
}

console.log("0");
init();