// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.getElementById("modal");
errorModal.classList.add("hidden"); // Hide error modal initially

document.addEventListener("DOMContentLoaded", () => {
 
  
  // Function to handle click on empty heart
  function clickEmptyHeart(heart) {
    mimicServerCall()
      .then(() => {
        // Simulate successful server response
        heart.innerText = FULL_HEART; // Change heart to full
        heart.classList.add("activated-heart"); // Add activated-heart class
      })
      .catch(error => {
        // Simulate failed server response
        errorModal.classList.remove("hidden"); // Show error modal
        const errorMessage = document.getElementById("modal-message");
        errorMessage.innerText = error; // Display error message in modal
        setTimeout(() => {
          errorModal.classList.add("hidden"); // Hide error modal after 3 seconds
        }, 3000);
      });
  }
  
  // Function to handle click on full heart
  function clickFullHeart(heart) {
    heart.innerText = EMPTY_HEART; // Change heart to empty
    heart.classList.remove("activated-heart"); // Remove activated-heart class
  }
  
  // Event delegation to handle clicks on hearts
  document.addEventListener("click", event => {
    if (event.target.matches(".like-glyph")) {
      const heart = event.target;
      if (heart.innerText === EMPTY_HEART) {
        clickEmptyHeart(heart);
      } else {
        clickFullHeart(heart);
      }
    }
  });
});
  
  // Event delegation to handle clicks on hearts
  document.addEventListener("click", event => {
    if (event.target.matches(".like-glyph")) {
      const heart = event.target;
      if (heart.innerText === EMPTY_HEART) {
        clickEmptyHeart();
      } else {
        clickFullHeart();
      }
    }
  });


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
