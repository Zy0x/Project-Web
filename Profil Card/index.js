// Get the profile image element
const profileImg = document.querySelector('.profile-img');

// Create the popup element and append it to the body
const popup = document.createElement('div');
popup.classList.add('popup');
const imgInPopup = document.createElement('img');
popup.appendChild(imgInPopup);
document.body.appendChild(popup);

// Close the popup when clicking anywhere outside the image
popup.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});

// When the profile image is clicked, show the popup with the original image
profileImg.addEventListener('click', () => {
  imgInPopup.src = profileImg.src; // Set the original image as the source
  popup.style.display = 'flex'; // Show the popup
});

