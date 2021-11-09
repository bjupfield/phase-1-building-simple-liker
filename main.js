// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function init(){
  const glyph = [...document.getElementsByClassName("like-glyph")];
  for(num in glyph){
    console.log(glyph[num].parentNode.parentNode.parentNode.parentNode);
    glyph[num].addEventListener("click",(obj)=>{
      const node = obj.target;
      if(node.className === "like-glyph activated-heart"){
        node.textContent = EMPTY_HEART;
        node.classList.remove("activated-heart")
      }
      else{
        console.log("heppening")
        mimicServerCall()
        .then(()=>{
          console.log("not failed")
          console.log(node.textContent)
          node.textContent = FULL_HEART;
          console.log(node.textContent)
          node.classList.add("activated-heart");
        })
        .catch(()=>{
          console.log("failed")
          const err = document.getElementById("modal");
          err.classList.remove("hidden");
          setTimeout(()=>{
            err.classList.add("hidden")
        },3000)
      })
      }
    });
  }  
}
window.addEventListener("DOMContentLoaded", init)



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
