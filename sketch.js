var sound1
function preload(){
  sound1 = loadSound("47538_feveran_strong_rock.mp3") //先把音樂載入到sound1程式碼中


}



function setup() {
  createCanvas(windowWidth,windowHeight);
  background("#227c9d")
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound1)
}
var w = 100
var s_w =50
var fc
function draw() {
  background("#227c9d")
  rectMode(CENTER)
  noFill()
  if(sound1.isPlaying())
  {   //音樂有播放時
    fc = map(analyzer.getLevel(),0,1,0,100)
  }
  else
  {   //音樂沒有播放
    fc = map(mouseX,0,width,0,100)
  }
  for(var y=50;y<=height;y=y+w){
    for(var x=50;x<=width+50;x=x+w){

  
  stroke("#fe6d73")
  strokeWeight(2)
  ellipse(x,y,w+fc)
  stroke("#ffcb77")
  rect(x,y,w+mouseY/10)
  //rect(x,y,100)

  stroke("##fe6d73")
  strokeWeight(2)
  ellipse(x+50,y+50,s_w+fc)

  stroke("#588157")
  strokeWeight(5)
  ellipse(x+75,y+75,s_w+fc)
    
}
}
}



function mousePressed(){
  if(sound1.isPlaying()){
    sound1.stop();
  }else{
    sound1.play();
  }
}
