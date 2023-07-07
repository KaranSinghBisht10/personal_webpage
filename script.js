var screenwidth=screen.width-100;

var face1=document.getElementById("face1");
var face2=document.getElementById("face2");



face1.style.width= screenwidth/4;
face2.style.width= screenwidth/4;




var bodyElement=document.querySelector("body");

bodyElement.addEventListener("mousemove",changeFace,false); //Whenever we move the mouse then changeFace method will be called

var maxWidth=screenwidth/2;



function changeFace(e){
    var face1width=face1.offsetWidth;  //offsetWidth gives us the width of the element
    var face2width=face2.offsetWidth;
    var text1_size=window.getComputedStyle(document.getElementById("text1")).fontSize;
    var text2_size=window.getComputedStyle(document.getElementById("text2")).fontSize;
   
   var xDirection=getMouseDirection(e);
  

  
    if(xDirection=="left"){
        moveLeft(face1width,face2width);
 
      
    }else{
        moveRight(face1width,face2width);   
     
    }
    
}



function  moveLeft(face1width,face2width){
    if(face2width<maxWidth+20){
      face2.style.width=face2width+10+"px"; //Increasing the face2 width by 10px
      face1.style.width=face1width-10+"px"; //Decreasing the face1 width by 10px
      
      var percentage=getPercentage(face2width,screenwidth/4)/100;
      document.getElementById("text2").style.opacity=percentage>0.2?percentage:0;

      
      var percentage=getPercentage(face1width,screenwidth/4)/100;
      document.getElementById("text1").style.opacity=percentage>0.2?percentage:0;
    }
}

function moveRight(face1width,face2width){
    if(face1width<maxWidth){
        face1.style.width= face1width+10+"px";
         face2.style.width=face2width-10+"px";
       

         var percentage=1-(getPercentage(face2width,screenwidth/4)/100);
         document.getElementById("text1").style.opacity=percentage>0.2?percentage:0;
   
         
         var percentage=1-(getPercentage(face1width,screenwidth/4)/100);
         document.getElementById("text2").style.opacity=percentage>0.2?percentage:0;
    
    }
}



function getPercentage(width,total){
    return ((width*100)/total);
}


var prevX=0;


function getMouseDirection(e){
    var dir;
currentX=e.pageX;
if(prevX<currentX){
dir="right";

}
else{
    dir="left";
}
prevX=currentX;
return dir;
}














// function checkScreenSize(mediaQuery) {
//     if (mediaQuery.matches) {
//       // Screen size is reduced, disable the function
//       myFunction = function() {
//         console.log("Function is disabled");
//       };
//     } else {
//       // Screen size is not reduced, enable the function
//       myFunction = changeFace();
//     }
//   }
  
//   // Add event listener for screen size changes
//   const mediaQuery = window.matchMedia("(max-width: 900px)");
//   mediaQuery.addEventListener("change", checkScreenSize);
  
//   // Initial check for screen size
//   checkScreenSize(mediaQuery);







