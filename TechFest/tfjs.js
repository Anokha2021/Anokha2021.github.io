var slider_content = document.getElementById('box');


var image = ['1701','1702', '1703', '1704','1705','1706','1707','1708','1709'];

var i = image.length;




function nextImage(){
  if (i<image.length) {
      i= i+1;
  }else{
      i = 1;
  }
    slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";
}




function prewImage(){

  if (i<image.length+1 && i>1) {
      i= i-1;
  }else{
      i = image.length;
  }
    slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";

}



setInterval(nextImage , 2000);