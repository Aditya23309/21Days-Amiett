// Select all FAQ items
const faqItems = document.querySelectorAll('.faq-item');

// Loop through each FAQ item and add a click event listener
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        // If the item is active, collapse it; otherwise, expand it
        if (item.classList.contains('active')) {
            answer.style.maxHeight = null;
            item.classList.remove('active');
        } else {
            // Collapse all open items before opening a new one
            faqItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.maxHeight = null;
            });

            // Expand the clicked item
            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});


document.getElementById("phone-icon").addEventListener("click", function() {
    const dropdown = document.getElementById("dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

// Close dropdown if clicked outside
window.addEventListener("click", function(event) {
    const dropdown = document.getElementById("dropdown");
    if (!document.getElementById("phone-icon").contains(event.target)) {
        dropdown.style.display = "none";
    }
});



 // Function to open the modal and play the trailer
 // Function to play the video
function playTrailer() {
    const video = document.getElementById('trailer-video');
    const playBtn = document.getElementById('play-btn');
    const thumbnailContainer = document.getElementById('thumbnail-container');

    // Hide the thumbnail container and play button
    thumbnailContainer.style.display = 'none';
    playBtn.style.display = 'none';

    // Display the video player and start playing
    video.style.display = 'block';
    video.play();
}



document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});


document.getElementById('readMoreBtn').addEventListener('click', function() {
    const reviews = document.getElementById('reviewBox');
    const hiddenReviews = document.querySelectorAll('.review.hidden');

    // Toggle visibility of hidden reviews
    hiddenReviews.forEach(review => {
        review.classList.toggle('hidden');
    });

    // Adjust max-height to accommodate all reviews when expanded
    if (reviews.style.maxHeight) {
        reviews.style.maxHeight = null;
        this.textContent = 'Read More';
    } else {
        reviews.style.maxHeight = reviews.scrollHeight + '%';
        this.textContent = 'Show Less';
    }
});


// Select elements
document.addEventListener('DOMContentLoaded', () => {
    // Select the menu icon and header icons container
    const menuIcon = document.getElementById('menu-icon');
    const headerIcons = document.getElementById('header-icons');
  
    // Add click event listener to the menu icon
    menuIcon.addEventListener('click', () => {
      // Toggle the 'active' class for the header icons
      headerIcons.classList.toggle('active');
    });
  });


// Wait for the page to fully load
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');

 } 

 function fadeOut(){
    setInterval(loader, 2000);
 }
 window.onload = fadeOut;

 function subscribe() {
    var email = document.getElementById('email').value;
    if (email) {
      alert('Thank you for subscribing!');
      document.getElementById('email').value = '';
    } else {
      alert('Please enter a valid email address.');
    }
  }