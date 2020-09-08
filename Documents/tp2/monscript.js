var compteurimage=1;
var totalimage=10;
 function slider (x) {
 	// body...
 	var image=document.getElementById('img');
 	compteurimage=compteurimage + x;
 	image.src=image/cookies+compteurimage+".jpg";
 }
 if(compteurimage>=totalimage) {compteurimage=1;}
 if(compteurimage<1) {compteurimage=totalimage;}



 	function sliderAuto () {
 	// body...
 	var image=document.getElementById('img');
 	compteurimage=compteurimage + 1;
 	image.src=image/cookies+compteurimage+".jpg";
 }
 if(compteurimage>=totalimage) {compteurimage=1;}
 if(compteurimage<1) {compteurimage=totalimage;}

 	window.setInterval(sliderAuto,2500);