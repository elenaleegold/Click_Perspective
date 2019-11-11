// var s = function ( sketch ){

let pos, speed;
let body_fill,body, sad1_mouth, sad1_eyes, sad2_mouth, sad2_eyes, normal_eyes, normal_mouth, happy1_eyes, happy1_mouth, happy2_eyes, happy2_mouth;

let imgHeight, imgWidth;
let state;
let r,g,b;
let canvas;
let wim;

function preload(){
  wim = loadImage('images/icon2.png')
}

function setup(){
  speed = 0;
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
  if (mouseY >= 20 && mouseY <= 20 + wim.height && mouseX > windowWidth - wim.width - 20 && mouseX < windowWidth - 20 && mouseIsPressed) {
      wim.resize(20, 44);
  } else {
      wim.resize(39, 86);
  }

}

function coolDown(num, links){
  console.log("hey!");
   for(var i = 0; i < links.length; i++){
    let fontS = map(num, 10, 0, 60, 12);
    links[i].style('font-size', fontS + 'px');
    links[i].style('pointer-events','none');
    links[i].style('cursor','default');
  }
  let newNum = num--;
  print(newNum);
  if (newNum != 0){
    coolDown(newNum, links);
  }
  else{
    return 0;
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
