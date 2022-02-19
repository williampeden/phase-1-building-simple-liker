// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector ("#modal")
// Your JavaScript code goes here!

hideError()
document.addEventListener("DOMContentLoaded", () => {
  listenForClick ()
})

function hideError () {
  errorModal.classList.add("hidden")
}

function handleError () {
  errorModal.classList.remove("hidden")
  setTimeout (() => {
   hideError()
  }, 3000)
}

function listenForClick () {
  document.addEventListener('click', (event) => {
   if (event.target.classList.value === 'like-glyph') {
     handleResponse(event)
    }
  })
}

function handleResponse (event) {
  if (event.target.textContent === EMPTY_HEART){
    event.target.classList.add ('activated-heart')
    event.target.textContent = FULL_HEART
    mimicServerCall()
    .catch (error => handleError(error))
  }
  else if (event.target.textContent === FULL_HEART){
    event.target.classList.remove('activated-heart')
    event.target.textContent = EMPTY_HEART
  }
}

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
