// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector ("#modal")
// Your JavaScript code goes here!

hideError()

function hideError () {
  errorModal.classList.add("hidden")
}


document.addEventListener("DOMContentLoaded", () => {
  const hearts = document.querySelectorAll("span.like-glyph")
  hearts.forEach(hearts => hearts.addEventListener("click", clickHandler))
  function clickHandler(hearts){
    mimicServerCall()
    .then( () => {
        if (hearts.target.innerText === EMPTY_HEART) {
          hearts.target.classList.add('activated-heart')
          hearts.target.innerText = FULL_HEART
          //console.log ("empty")
        }
        else {
          hearts.target.classList.remove('activated-heart')
          hearts.target.innerText = EMPTY_HEART
          //console.log ("full")
        }
      })
    .catch((error) => {
        //console.log("error")
        errorModal.classList.remove("hidden")
        setTimeout(() => {
          hideError()
          }, 3000)
      })
      
  }

})


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
