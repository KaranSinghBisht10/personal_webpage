let text= document.querySelector("h1");
let leaf= document.getElementById("leaf");
let hill1=document.getElementById("hill1");

let scroll=window.addEventListener('scroll',()=>{
  let value = Math.min(window.scrollY, 1000);

  text.style.marginTop=value*2.5+'px';
  
  leaf.style.top=value*-1.5+'px';
  leaf.style.left=value*+1.5+'px';
  hill1.style.top=value*-0.3+'px';
  let opacity = 1 - value / 1000; // Adjust the divisor to control the fading range
  text.style.opacity = opacity;

})


let art=document.getElementsByClassName(art);
