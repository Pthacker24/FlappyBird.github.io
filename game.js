var block = document.getElementById("block");
var hole = document.getElementById("hole");
var player = document.getElementById("player");
var counter = 0;
var jumping = 0;

hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*409)+150);
    hole.style.top = random +  "px";
    counter++;
});
setInterval(() => {
    var playerTop = parseFloat(window.getComputedStyle(player).getPropertyValue("top"));
    if(jumping ==0){
    player.style.top = (playerTop+4)+"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var pTop = -(609-playerTop);
    if((playerTop>588)||(blockLeft<20)&&(blockLeft>-50)&&((pTop<holeTop)||(pTop>holeTop+130))){
        alert("Game Over, Score: "+counter);
        player.style.top = 100 +"px";
        counter=0;
    }
}, 10);

function jump(){
    jumping =1
    let jumpCount = 0;
    var jumpInterval = setInterval(() => {
    var playerTop = parseFloat(window.getComputedStyle(player).getPropertyValue("top"));
    if((playerTop>6) && (counter<15)){
    player.style.top = (playerTop-4)+"px";
    }
    if(jumpCount>20){
        clearInterval(jumpInterval);
        jumping = 0;
        jumpCount = 0;
        blockLeft = 400+"px";
    }
    jumpCount++;
    }, 10);
}