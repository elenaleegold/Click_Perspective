// var s = function ( sketch ){

let pos, speed;
let body_fill,body, sad1_mouth, sad1_eyes, sad2_mouth, sad2_eyes, normal_eyes, normal_mouth, happy1_eyes, happy1_mouth, happy2_eyes, happy2_mouth;

let imgHeight, imgWidth;
let state;
let r,g,b;
let canvas;
let wim;
var rand;
var fontMove;
var redVar, redDiv;

function preload(){
  wim = loadImage('https://raw.githubusercontent.com/elenaleegold/Click_Perspective/master/images/icon2.png')
}

function setup(){
  speed = 0;
  rand = 0;
  redVar = 0;
  fontMove = false;
  redDiv = createDiv();
      $('#defaultCanvas0').css("box-sizing", "border-box");
    // $('#defaultCanvas0').css("height", "800px");
    $('#defaultCanvas0').css("position", "fixed");
    $('#defaultCanvas0').css("z-index", "10000");
    $('#defaultCanvas0').css("margin", "0");
    $('#defaultCanvas0').css("float", "left");
    $('#defaultCanvas0').css("bottom","0px");
    $('#defaultCanvas0').css("left","0px");
     $('#defaultCanvas0').css("pointer-events","none");
  // jQuery('<div/>', {
  // id: 'siteBox',
  // title: 'div-border'
  // }).appendTo('body');


  // $('#siteBox').css("position", "fixed");

  canvas = createCanvas(300, 500);

}

function draw(){
  clear();
  createCanvas(windowWidth, windowHeight);
  image(wim, windowWidth - wim.width - 20, 20);


  // if (mouseY >= 20 && mouseY <= 20 + wim.height && mouseX > windowWidth - wim.width - 20 && mouseX < windowWidth - 20 && mouseIsPressed) {
  //     wim.resize(20, 44);
  //     // bigFont();
  //     // redTint();
  //     // blurBaby();
  //     changeText();

  // } else {
  //     wim.resize(39, 86);
  // }

  if (mouseIsPressed) {
      wim.resize(20, 44);
      // bigFont();
      // redTint();
      // blurBaby();
      // changeText();
      imageStretch();
  } else {
      wim.resize(39, 86);
  }

  if(fontMove == true){
     var txtObjs = selectAll('p');
     for(var i = 0; i < txtObjs.length; i++){
      txtObjs[i].style('color','rgb('+ int(random(255)) + ',' + int(random(255)) + ',' + int(random(255)) + ')');
     }
      // select('p').position(100, 100);
      // bodyTxt[i].style('font-size',int(random(30) + 'px'));
      // console.log(bodyTxt[i]);
  }


  if(redVar == 2){
        redDiv.id('redDiv');
        redDiv.style('width','100%');
        redDiv.style('height','100%');
        redDiv.style('background-color','red');
        redDiv.style('position','fixed');
        redDiv.style('z-index','100');
        redDiv.style('mix-blend-mode','multiply');
        redVar = 1;
  }
  else if(redVar == 1){
    var randNum = random(100,255);
    console.log(randNum);
    redDiv.style('background-color','rgb(' + randNum + ',0,0');
  }


}

function bigFont(){
  fontMove = true;
  // body.style('font-size','100px');
}

function redTint(){
      redVar = 2;
}

function blurBaby(){
  var body = select('body');
  body.style('filter','blur(4px)');
}

function changeText(){
  var p = selectAll('p');
  var p2 = selectAll('p');
  var x = p[12].elt.innerText;
  for(var i = 0; i < p.length; i++){
    var rand = int(random(p.length));

    p[i].html(p2[rand].elt.innerText);
  }

  var h1 = selectAll('h1');
  var h2 = selectAll('h1');

  for(var i = 0; i < h1.length; i++){
    var rand = int(random(h1.length));
    h1[i].html(h2[rand].elt.innerText);
  }

  var a = selectAll('a');
  var a2 = selectAll('a');

  for(var i = 0; i < a.length; i++){
    var rand = int(random(a.length));
    a[i].html(a2[rand].elt.innerText);
  }


}

function imageStretch(){
  var img = selectAll('img');
  for(var i = 0; i < img.length; i++){
    // var rand = int(random(400));
    img[i].elt.src = 'https://raw.githubusercontent.com/elenaleegold/Scrolling_Loneliness/master/images/body.png';
    console.log(img[i]);
  }
}



function mouseWheel(event) {
  //print(event.delta);
  //move the square according to the vertical scroll amount
  b--;
  r++;
  //uncomment to block page scrolling
  //return false;
}

// }
