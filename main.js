//Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let modal = document.querySelector('#modal')

modal.classList.add('hidden')
let likeHeart = document.querySelectorAll('.like-glyph')

function clickDisplay(e){
  const heart = e.target
  mimicServerCall()
    .then((serverMessage) => {
      alert(serverMessage)
    
     
        if ( heart.innerText === EMPTY_HEART) {
          heart.innerText = FULL_HEART;
          heart.className = "activated-heart";
        } else {
          heart.innerText = EMPTY_HEART;
          heart.className = "";
        }      
    })
    .catch((err) => {
      modal.classList.remove("hidden");
      document.getElementById("modal-message").textContent = "Random server error. Try again."
      setTimeout(()=>{modal.classList.add('hidden')}, 3000)
    });
}
for (const glyph of likeHeart){
  glyph.addEventListener('click', clickDisplay)
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
