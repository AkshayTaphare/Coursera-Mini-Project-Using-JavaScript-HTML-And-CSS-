var originalimage=null;
var resetimage=null;
var redimage=null;
var grayimage=null;
var rainbowimage=null;
var blurimage=null;
function imageIsLoaded(img) {
  if (img == null || !img.complete()) {
    alert("Image not loaded");
    return false;
  } else {
    return true;
  }
}
function UpLoadImage(){
  var dd1=document.getElementById("d1");
  var inputimage=document.getElementById("finput");
  originalimage=new SimpleImage(inputimage);
  resetimage=new SimpleImage(inputimage);
  redimage=new SimpleImage(inputimage);
  grayimage=new SimpleImage(inputimage);
  rainbowimage=new SimpleImage(inputimage);
  blurimage=new SimpleImage(inputimage);
  originalimage.drawTo(dd1); 
}
function DoGrayscale(){
  if(imageIsLoaded(grayimage)){
      for(var px of grayimage.values()){
      var avg=(px.getRed()+px.getGreen()+px.getBlue())/3;
      px.setRed(avg);
      px.setGreen(avg);
      px.setBlue(avg);
    }
    var imagecanvas=document.getElementById("d1");
    grayimage.drawTo(imagecanvas); 
    
  }
  
}
function DoReset()
{
  if(imageIsLoaded(resetimage)){
       var imagecanvas=document.getElementById("d1");
       resetimage.drawTo(imagecanvas);
       redimage=new SimpleImage(resetimage);
       grayimage=new SimpleImage(resetimage);
  }
  
}
function DoRed(){
 if(imageIsLoaded(redimage)){
      for(var px of redimage.values()){
    var avg=(px.getRed()+px.getGreen()+px.getBlue())/3;
    if(avg<128){
      px.setRed(2*avg);
      px.setGreen(0);
      px.setBlue(0);
    }else{
      px.setRed(255);
      px.setGreen((2*avg)-255);
      px.setBlue((2*avg)-255);
    }
  }
  var resultImage=document.getElementById("d1");
  redimage.drawTo(resultImage);
 }
}
function DoRainBow(){
  if(imageIsLoaded(rainbowimage)){
      var height=rainbowimage.getHeight();
      for(var px of rainbowimage.values())  {
          var y=px.getY();
          var avg=(px.getRed()+px.getGreen()+px.getBlue())/3;
          if(y<height*1/7){
              if (avg < 128) {
                 px.setRed(2 * avg);
                 px.setGreen(0);
                 px.setBlue(0);
              } else {
                 px.setRed(255);
                 px.setGreen(2 * avg - 255);
                 px.setBlue(2 * avg - 255);
               }
          }
          else if(y<height*2/7){
                 if (avg < 128) {
                     px.setRed(2 * avg);
                     px.setGreen(0.8*avg);
                     px.setBlue(0);
                 } else {
                    px.setRed(255);
                    px.setGreen(1.2*avg-51);
                    px.setBlue(2 * avg - 255);
                 }
          }
          else if(y<height*3/7){
                if (avg < 128) {
                    px.setRed(2 * avg);
                    px.setGreen(2*avg);
                    px.setBlue(0);
                 } else {
                    px.setRed(255);
                    px.setGreen(255);
                    px.setBlue(2 * avg - 255);
                 }
          }
          else if(y<height*4/7){
                 if (avg < 128) {
                    px.setRed(0);
                    px.setGreen(2*avg);
                    px.setBlue(0);
                 } else {
                    px.setRed(2*avg-255);
                    px.setGreen(255);
                    px.setBlue(2 * avg - 255);
                 }
          }
          else if(y<height*5/7){
                if (avg < 128) {
                  px.setRed(0);
                  px.setGreen(0);
                  px.setBlue(2*avg);
                } else {
                  px.setRed(2*avg-255);
                  px.setGreen(2 * avg - 255);
                  px.setBlue(255);
                 }
          }
          else if(y<height*6/7){
                if (avg < 128) {
                    px.setRed(.8*avg);
                    px.setGreen(0);
                    px.setBlue(2*avg);
                } else {
                    px.setRed(1.2*avg-51);
                    px.setGreen(2 * avg - 255);
                    px.setBlue(255);
                 }
          }
          else{
                 if (avg < 128) {
                    px.setRed(1.6*avg);
                    px.setGreen(0);
                    px.setBlue(1.6*avg);
                 } else {
                     px.setRed(0.4*avg+153);
                     px.setGreen(2 * avg - 255);
                     px.setBlue(0.4*avg+153);
                  }
          }
       }
        var resultImage=document.getElementById("d1");
        rainbowimage.drawTo(resultImage);
    }
}
function DoBlur(){
  if(imageIsLoaded(blurimage)){
      document.getElementById("finput").className = "blurClass";
  }
}