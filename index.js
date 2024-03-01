const buttonSubscribed = document.querySelector('#subscribe-button');
const buttonHire = document.querySelector('.submit');
const contactButton = document.querySelector('.contact-submit');
const movingBoxContainer = document.querySelector(".content-container");
const movingBox = document.querySelector(".content");
const movingBoxText = document.getElementById("texts");
const randomText = document.querySelector(".h3");
const movingForm = document.querySelector(".newslatter");
const position = ["flex-start","center"];



buttonSubscribed.addEventListener('mouseenter',hoverIn);
buttonSubscribed.addEventListener('mouseout',hoverOut);


buttonHire.addEventListener('mouseenter',hoverIn);
buttonHire.addEventListener('mouseout',hoverOut);

contactButton.addEventListener('mouseenter',hoverIn);
contactButton.addEventListener('mouseout',hoverOut);

let mybutton = document.getElementById("btn-back-to-top");




// function for changing text
var names = Array('FRONTEND DEV.', 'BACKEND DEV.','TECH WRITER.');
function pickName(){
    return names[Math.floor(Math.random() * names.length)]
}
setInterval(function(){
    $("#randomName").text(pickName());
}, 2800);

// moving div
function orderlyMove(){
    position.forEach(function(item,index){
    setTimeout(function(){
      
      if(index==0){
        movingBox.style.alignItems="flex-start";
        randomText.style.textAlign="left";
        movingForm.style.alignSelf="flex-start";
        movingForm.style.marginLeft='5px';
      }
      else{
        // movingBox.style.backgroundColor='black';
        randomText.style.textAlign="center";
        movingForm.style.alignSelf="center";
        movingBox.style.marginRight='10px';
        
      }
      movingBoxContainer.style.justifyContent=item;
  
    },index*6000);

    });
}
setInterval(orderlyMove,12000);

function orderlyMove2(){
  const headed = document.querySelectorAll(".item h4");
  document.querySelectorAll(".item i").forEach(function(item,index){
      setTimeout(function(){
          if(item.style.color== "white"){
              item.style.color= "red";
              headed[index].style.color= "blue";
          }
          else{
            headed[index].style.color= "white";
              item.style.color= "white";
          }
      },index*3000);
  });
}
setInterval(orderlyMove2,12000);



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}





function hoverIn(e){
    e.target.style.backgroundColor='#1e375a';
    e.target.style.color='white';
  
}
function hoverOut(e){
  e.target.style.backgroundColor='blue';
    
}
$(function() {
  var img = $("#plane"),
      width = img.get(0).width,
      screenWidth = $(window).width(),
      duration = 7000;

  function animatePlane() {
      img.css("left", -width).animate({
          "left": screenWidth
      }, duration, animatePlane);
  }

  animatePlane();
});
// code for button to top
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);


var actionMenu = document.getElementById( "action-menu" );
var isOpen = false;

actionMenu.addEventListener( "click", function () {
  if ( isOpen ) {
    document.querySelector( ".nav-list" ).className = "nav-list slideShut";
    isOpen = false;

  }
  else {
    if (document.querySelector( ".nav-list" ).lastElementChild.firstElementChild.getAttribute("href")==="./contact.html"){
      const div = document.createElement("li");
      div.innerHTML = '<a id="newSubscribe-button" href="subscribe.html"  style="text-decoration: none;">Subscribe</a>';
      document.querySelector(".nav-list").appendChild(div);
      // mybutton.remove();
  
    }
    
    

    document.querySelector(".nav-list").className = "nav-list slideOpen";
    isOpen = true;

  }

});
// let widthMatch  = window.matchMedia("(min:width:500px)");
// widthMatch.addEventListener('change',function(e){
//   if(e.matches){
//     document.body.addEventListener('wheel',foo,{passive:true});
//     mybutton.remove();
//   }
//   else{

//   }
// })
// document.body
