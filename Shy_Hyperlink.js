// var s = function ( sketch ){

let pos, speed;
let body_fill,body, sad1_mouth, sad1_eyes, sad2_mouth, sad2_eyes, normal_eyes, normal_mouth, happy1_eyes, happy1_mouth, happy2_eyes, happy2_mouth;

let imgHeight, imgWidth;
let state;
let r,g,b;
let canvas;

  let h = document.body.clientHeight;
  let w = document.body.clientHeight;

function preload(){
  
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
   //if speed is greater than 2, font size stays big for like 5 seconds
    if(frameCount% 60 == 0){
      
    }
    let speedFont = map(speed,0,30,20,2);
    let d = select('body');
    let links = selectAll('a');
    console.log(speed);
    if(speed > 5 ){
      for(var i = 0; i < links.length; i++){
        // let fontS = map(speed, 10, 0, 60, 12);
        links[i].style('font-size', speedFont + 'px');
        links[i].style('pointer-events','none');
        links[i].style('cursor','default');
      }
      speed-=0.2;
    }
    else{
         for(var i = 0; i < links.length; i++){
         links[i].style('pointer-events','auto');
         links[i].style('cursor','pointer');
        }
        speed = abs(winMouseX - pwinMouseX);
    }
      // // for normal speeds, run through for loop and 
      // // set back to normal pointer events
      //  for(var i = 0; i < links.length; i++){
      // // if(speed < 2){
      // // links[i].style('pointer-events','auto');
      // // links[i].style('cursor','pointer');
      // // }
    // }
  //   let curSize = links[i].elt.style.fontSize;
  //   links[i].style('font-size', speedFont + 'px');
  // }
    
  


  // if(second() % 2 == 0){
  //   console.log("hey1");
  //   time1 = second();
  //   dist1x = mouseX;
  //   dist1y = mouseY;
  // }
  // else{
  //   console.log("hey2");
  //   time2 = second();
  //   dist2x = mouseX;
  //   dist2y = mouseY;
  // }
  // let changeDis = dist(dist1x, dist1y, dist2x, dist2y);
  // vel = changeDis / (time2 - time1);
  // print(changeDis);




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
