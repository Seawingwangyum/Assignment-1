var move = 10;
var hidden = 0;

document.getElementById("box1").addEventListener("click", function(){
    document.getElementById("LeftBar").style.display = "block";
    document.getElementById("RightBar").style.display = "none";
    document.getElementById("TopBar").style.display = "none";
    document.getElementById("BotBar").style.display = "none";
    if(hidden == 1){
      document.getElementById("LeftBar").style.top = "0px";
        document.getElementById("RightBar").style.top = "0px";
        document.getElementById("TopBar").style.top = "0px";  
        document.getElementById("BotBar").style.top = "0px";
        document.getElementById("lefthide").src = "img/Arrows/ArrowU.png";
        hidden = 0;
    }
});
document.getElementById("box2").addEventListener("click", function(){
    document.getElementById("LeftBar").style.display = "none";
    document.getElementById("RightBar").style.display = "block";
    document.getElementById("TopBar").style.display = "none";
    document.getElementById("BotBar").style.display = "none";
    if(hidden == 1){
      document.getElementById("LeftBar").style.top = "0px";
        document.getElementById("RightBar").style.top = "0px";
        document.getElementById("TopBar").style.top = "0px";  
        document.getElementById("BotBar").style.top = "0px";
        document.getElementById("righthide").src = "img/Arrows/ArrowU.png";
        hidden = 0;
    }
});
document.getElementById("box3").addEventListener("click", function(){
    document.getElementById("LeftBar").style.display = "none";
    document.getElementById("RightBar").style.display = "none";
    document.getElementById("TopBar").style.display = "block";
    document.getElementById("BotBar").style.display = "none";
    if(hidden == 1){
      document.getElementById("LeftBar").style.top = "0px";
        document.getElementById("RightBar").style.top = "0px";
        document.getElementById("TopBar").style.top = "0px";  
        document.getElementById("BotBar").style.top = "0px";
        document.getElementById("tophide").src = "img/Arrows/ArrowU.png";
        hidden = 0;
    }
});
document.getElementById("box4").addEventListener("click", function(){
    document.getElementById("LeftBar").style.display = "none";
    document.getElementById("RightBar").style.display = "none";
    document.getElementById("TopBar").style.display = "none";
    document.getElementById("BotBar").style.display = "block";
    if(hidden == 1){
      document.getElementById("LeftBar").style.top = "0px";
        document.getElementById("RightBar").style.top = "0px";
        document.getElementById("TopBar").style.top = "0px";  
        document.getElementById("BotBar").style.top = "0px";
        document.getElementById("bothide").src = "img/Arrows/ArrowU.png";
        hidden = 0;
    }
});
var box1y = 0;
var box1x = 0;
var box1w = 300;
var box1h = 200;

document.getElementById("img 1").addEventListener("click", function(){
    document.getElementById("box1").src = "img/img1.jpg"
});
document.getElementById("img 2").addEventListener("click", function(){
    document.getElementById("box1").src = "img/img2.jpg"
})
document.getElementById("img 3").addEventListener("click", function(){
    document.getElementById("box1").src = "img/img3.jpg"
});
document.getElementById("Leftleft").addEventListener("click", function(){
    box1y = box1y - move;
    document.getElementById("box1").style.left = box1y + "px";
});
document.getElementById("leftright").addEventListener("click", function(){
    box1y = box1y + move;
    document.getElementById("box1").style.left = box1y + "px";
});
document.getElementById("leftup").addEventListener("click", function(){
    box1x = box1x - move;
    document.getElementById("box1").style.top = box1x + "px";
});
document.getElementById("leftdown").addEventListener("click", function(){
    box1x = box1x + move;
    document.getElementById("box1").style.top = box1x + "px";
});
document.getElementById("left+").addEventListener("click", function(){
    box1w = box1w + 10;
    box1h = box1h + 10;
    document.getElementById("box1").style.width = box1w + "px";
    document.getElementById("box1").style.height = box1h + "px";
});
document.getElementById("left-").addEventListener("click", function(){
    box1w = box1w - 10;
    box1h = box1h - 10;
    document.getElementById("box1").style.width = box1w + "px";
    document.getElementById("box1").style.height = box1h + "px";
});
document.getElementById("lefthide").addEventListener("click", function(){
    if(hidden === 0){
        document.getElementById("LeftBar").style.top = "-75px";
        document.getElementById("RightBar").style.top = "-75px";
        document.getElementById("TopBar").style.top = "-75px";  
        document.getElementById("BotBar").style.top = "-75px";
        document.getElementById("lefthide").src = "img/Arrows/ArrowD.png";
        hidden = 1;
    }else{
        document.getElementById("LeftBar").style.top = "0px";
        document.getElementById("RightBar").style.top = "0px";
        document.getElementById("TopBar").style.top = "0px";  
        document.getElementById("BotBar").style.top = "0px";
        document.getElementById("lefthide").src = "img/Arrows/ArrowU.png";
        hidden = 0;
    }
});
document.getElementById("leftreset").addEventListener("click", function(){
    box1y = 0;
    box1x = 0;
    box1w = 300;
    box1h = 200;
    document.getElementById("box1").src = "img/img1.jpg" ;
    document.getElementById("box1").style.height = box1h + "px";
    document.getElementById("box1").style.width = box1w + "px";
    document.getElementById("box1").style.top = box1y + "px";
    document.getElementById("box1").style.left = box1x + "px";
});

var box2y = 0;
var box2x = 0;
var box2w = 300;
var box2h = 200;
document.getElementById("img 4").addEventListener("click", function(){
    document.getElementById("box2").src = "img/img4.jpg";
});
document.getElementById("img 5").addEventListener("click", function(){
    document.getElementById("box2").src = "img/img5.jpg"
})
document.getElementById("img 6").addEventListener("click", function(){
    document.getElementById("box2").src = "img/img6.gif"
});
document.getElementById("rightleft").addEventListener("click", function(){
    box2y = box2y + move;
    document.getElementById("box2").style.right = box2y + "px";
});
document.getElementById("rightright").addEventListener("click", function(){
    box2y = box2y - move;
    document.getElementById("box2").style.right = box2y + "px";
});
document.getElementById("rightup").addEventListener("click", function(){
    box2x = box2x - move;
    document.getElementById("box2").style.top = box2x + "px";
});
document.getElementById("rightdown").addEventListener("click", function(){
    box2x = box2x + move;
    document.getElementById("box2").style.top = box2x + "px";
});
document.getElementById("right+").addEventListener("click", function(){
    box2w = box2w + 10;
    box2h = box2h + 10;
    document.getElementById("box2").style.width = box2w + "px";
    document.getElementById("box2").style.height = box2h + "px";
});
document.getElementById("right-").addEventListener("click", function(){
    box2w = box2w - 10;
    box2h = box2h - 10;
    document.getElementById("box2").style.width = box2w + "px";
    document.getElementById("box2").style.height = box2h + "px";
});
document.getElementById("righthide").addEventListener("click", function(){
    if(hidden === 0){
        document.getElementById("LeftBar").style.top = "-75px";
        document.getElementById("RightBar").style.top = "-75px";
        document.getElementById("TopBar").style.top = "-75px";  
        document.getElementById("BotBar").style.top = "-75px";
        document.getElementById("righthide").src = "img/Arrows/ArrowD.png";
        hidden = 1;
    }else{
        document.getElementById("LeftBar").style.top = "0px";
        document.getElementById("RightBar").style.top = "0px";
        document.getElementById("TopBar").style.top = "0px";  
        document.getElementById("BotBar").style.top = "0px";
        document.getElementById("righthide").src = "img/Arrows/ArrowU.png";
        hidden = 0;
    }
});
document.getElementById("rightreset").addEventListener("click", function(){
    box2y = 0;
    box2x = 0;
    box2w = 300;
    box2h = 200;
    document.getElementById("box2").src = "img/img4.jpg" ;
    document.getElementById("box2").style.height = box2h+ "px";
    document.getElementById("box2").style.width = box2w + "px";
    document.getElementById("box2").style.top = box2y + "px";
    document.getElementById("box2").style.right = box2x + "px";
});

var box3y = 0;
var box3x = 200;
var box3w = 300;
var box3h = 200;

document.getElementById("img 7").addEventListener("click", function(){
    document.getElementById("box3").src = "img/img7.jpg"
});
document.getElementById("img 8").addEventListener("click", function(){
    document.getElementById("box3").src = "img/img8.gif"
})
document.getElementById("img 9").addEventListener("click", function(){
    document.getElementById("box3").src = "img/img9.gif"
});
document.getElementById("topleft").addEventListener("click", function(){
    box3y = box3y + move;
    document.getElementById("box3").style.right = box3y + "px";
});
document.getElementById("topright").addEventListener("click", function(){
    box3y = box3y - move;
    document.getElementById("box3").style.right = box3y + "px";
});
document.getElementById("topup").addEventListener("click", function(){
    box3x = box3x - move;
    document.getElementById("box3").style.top = box3x + "px";
});
document.getElementById("topdown").addEventListener("click", function(){
    box3x = box3x + move;
    document.getElementById("box3").style.top = box3x + "px";
});
document.getElementById("top+").addEventListener("click", function(){
    box3w = box3w + 10;
    box3h = box3h + 10;
    document.getElementById("box3").style.width = box3w + "px";
    document.getElementById("box3").style.height = box3h + "px";
});
document.getElementById("top-").addEventListener("click", function(){
    box3w = box3w - 10;
    box3h = box3h - 10;
    document.getElementById("box3").style.width = box3w + "px";
    document.getElementById("box3").style.height = box3h + "px";
});
document.getElementById("tophide").addEventListener("click", function(){
    if(hidden === 0){
        document.getElementById("LeftBar").style.top = "-75px";
        document.getElementById("RightBar").style.top = "-75px";
        document.getElementById("TopBar").style.top = "-75px";  
        document.getElementById("BotBar").style.top = "-75px";
        document.getElementById("tophide").src = "img/Arrows/ArrowD.png";
        hidden = 1;
    }else{
        document.getElementById("LeftBar").style.top = "0px";
        document.getElementById("RightBar").style.top = "0px";
        document.getElementById("TopBar").style.top = "0px";  
        document.getElementById("BotBar").style.top = "0px";
        document.getElementById("tophide").src = "img/Arrows/ArrowU.png";
        hidden = 0;
    }
});
document.getElementById("topreset").addEventListener("click", function(){
    box3y = 0;
    box3x = 200;
    box3w = 300;
    box3h = 200;
    document.getElementById("box3").src = "img/img7.jpg" ;
    document.getElementById("box3").style.height = box3h+ "px";
    document.getElementById("box3").style.width = box3w + "px";
    document.getElementById("box3").style.top = box3x + "px";
    document.getElementById("box3").style.right = box3y + "px";
});

var box4y = 0;
var box4x = 0;
var box4w = 300;
var box4h = 200;

document.getElementById("img 10").addEventListener("click", function(){
    document.getElementById("box4").src = "img/img10.jpg"
});
document.getElementById("img 11").addEventListener("click", function(){
    document.getElementById("box4").src = "img/img11.jpg"
})
document.getElementById("img 12").addEventListener("click", function(){
    document.getElementById("box4").src = "img/img12.gif"
});
document.getElementById("botleft").addEventListener("click", function(){
    box4y = box4y - move;
    document.getElementById("box4").style.left = box4y + "px";
});
document.getElementById("botright").addEventListener("click", function(){
    box4y = box4y + move;
    document.getElementById("box4").style.left = box4y + "px";
});
document.getElementById("botup").addEventListener("click", function(){
    box4x = box4x + move;
    document.getElementById("box4").style.bottom = box4x + "px";
});
document.getElementById("botdown").addEventListener("click", function(){
    box4x = box4x - move;
    document.getElementById("box4").style.bottom = box4x + "px";
});
document.getElementById("bot+").addEventListener("click", function(){
    box4w = box4w + 10;
    box4h = box4h + 10;
    document.getElementById("box4").style.width = box4w + "px";
    document.getElementById("box4").style.height = box4h + "px";
});
document.getElementById("bot-").addEventListener("click", function(){
    box4w = box4w - 10;
    box4h = box4h - 10;
    document.getElementById("box4").style.width = box4w + "px";
    document.getElementById("box4").style.height = box4h + "px";
});
document.getElementById("bothide").addEventListener("click", function(){
    if(hidden === 0){
        document.getElementById("LeftBar").style.top = "-75px";
        document.getElementById("RightBar").style.top = "-75px";
        document.getElementById("TopBar").style.top = "-75px";  
        document.getElementById("BotBar").style.top = "-75px";
        document.getElementById("righthide").src = "img/Arrows/ArrowD.png";
        hidden = 1;
    }else{
        document.getElementById("LeftBar").style.top = "0px";
        document.getElementById("RightBar").style.top = "0px";
        document.getElementById("TopBar").style.top = "0px";  
        document.getElementById("BotBar").style.top = "0px";
        document.getElementById("righthide").src = "img/Arrows/ArrowU.png";
        hidden = 0;
    }
});
document.getElementById("botreset").addEventListener("click", function(){
    box4y = 0;
    box4x = 0;
    box4w = 300;
    box4h = 200;
    document.getElementById("box4").src = "img/img10.jpg" ;
    document.getElementById("box4").style.height = box4h+ "px";
    document.getElementById("box4").style.width = box4w + "px";
    document.getElementById("box4").style.bottom = box4y + "px";
    document.getElementById("box4").style.right = box4x + "px";
});