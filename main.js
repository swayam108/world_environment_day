function start(){
    window.location.replace("main.html");
}
var timeLeft = 30;
var elem = document.getElementById('time');
    
var timerId = setInterval(countdown, 1000);
    
function countdown() {
  if (timeLeft == -1) {
    clearTimeout(timerId);
    doSomething();
  } 
  else {
    elem.innerHTML = "00:"+timeLeft;timeLeft--;
   }
    
}
var imgs=["bananapeel.png","paperbag.png","meat.png","paper.png","rotten apple.png","plastic.png","rotten egg.png"];
var image=document.getElementById('img');
var text=document.getElementById("w_r");

var number=0;

function img(){
    image.src=imgs[number]
}

function rec(){
    console.log("hii")
    if(image.src=="bananapeel.png"){
       text.innerHTML="WRONG ANSWER";
       console.log('banana');
    }
    if(image.src=="paperbag.png"){
        text.innerHTML="RIGHT ANSWER";
        console.log('paper bag');

     }
    if(image.src=="meat.png"){
        text.innerHTML="WRONG ANSWER";
     }
    if(image.src=="paper.png"){
        text.innerHTML="RIGHT ANSWER";
     }
    if(image.src=="rotten apple.png"){
        text.innerHTML="WRONG ANSWER";
     }
    if(image.src=="plastic.png"){
        text.innerHTML="RIGHT ANSWER";
     }
    else{
        text.innerHTML="WRONG ANSWER";
     }
    number=number+1
    image.src=imgs[number]
}

function org(){
    console.log("hii")
    if(image.src="banana peel.png"){
       text.innerHTML="RIGHT ANSWER"
    }
    if(image.src="paper bag.png"){
        text.innerHTML="WRONG ANSWER"
     }
    if(image.src="meat.png"){
        text.innerHTML="RIGHT ANSWER"
     }
    if(image.src="paper.png"){
        text.innerHTML="WRONG ANSWER"
     }
     if(image.src="rotten apple.png"){
        text.innerHTML="RIGHT ANSWER"
     }
    if(image.src="plastic.png"){
        text.innerHTML="WRONG ANSWER"
     }
    if(image.src="rotten egg.png"){
        text.innerHTML="RIGHT ANSWER"
     }

    number=number+1
    image.src=imgs[number]
}
