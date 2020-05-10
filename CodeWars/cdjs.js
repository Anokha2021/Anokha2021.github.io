var slider_content = document.getElementById('box');


var image = ['1801','1802', '1803', '1804','1805','1806','1807','1808','1809'];

var i = image.length;

 

function nextImage(){
  if (i<image.length) {
      i= i+1;
  }else{
      i = 1;
  }
    slider_content.innerHTML = "<img src="+image[i-1]+".jfif>";
}




function prewImage(){

  if (i<image.length+1 && i>1) {
      i= i-1;
  }else{
      i = image.length;
  }
    slider_content.innerHTML = "<img src="+image[i-1]+".jfif>";

}


setInterval(nextImage , 2000);