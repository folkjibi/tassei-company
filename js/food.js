// Select all filter buttons and filterable cards 
const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableCards = document.querySelectorAll(".filterable-cards .card");

// Check if there is a selected filter in local storage
const savedFilter = localStorage.getItem("selectedFilter");

// Set the initial filter state based on local storage or default to "all"
const initialFilter = savedFilter || "all";

// Set the initial active filter button
const initialActiveButton = document.querySelector(`[data-name="${initialFilter}"]`) || filterButtons[0];

// Define the filterCards function
const filterCards = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  // Save the selected filter to local storage
  localStorage.setItem("selectedFilter", e.target.dataset.name);

  // Iterate over each filterable card
  filterableCards.forEach(card => {
    // Add "hide" class to hide the card initially
    card.classList.add("hide");
    // Check if the card matches the selected filter or "all" is selected
    if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
      card.classList.remove("hide");
    }
  });
}

// Add event listener to filter buttons
filterButtons.forEach(button => button.addEventListener("click", filterCards));

// Trigger the click event for the initial active filter button
initialActiveButton.click();


// ติดต่อซื้อขาย button sale
const popupButton = document.querySelectorAll(".popup-button");
const popupContainer = document.getElementById("popupContainer");
const closeButton = document.getElementById("closeButton");

popupButton.forEach(button => {
  button.addEventListener("click", () => {
    popupContainer.style.display = "flex";
  });
});

popupContainer.addEventListener("click", (event) => {
  if (event.target !== closeButton) {
    popupContainer.style.display = "none";
  }
})

// closeButton.addEventListener("click", () => {
//   popupContainer.style.display = "none";
// });


// ปุ่มซูมรูปภาพ zoom image
const galleryImages = document.querySelectorAll('.gallery-img');
const popup = document.querySelector('.popup');
const popupImage = document.querySelector('.popup-img');
const closePopup = document.querySelector('.close-popup');

galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    const src = image.getAttribute('src');
    popupImage.setAttribute('src', src);
    popup.style.display = 'flex';
  });
});

popup.addEventListener("click", (event) => {
  if (event.target !== closePopup) {
    popup.style.display = "none";
  }
})

// closePopup.addEventListener('click', () => {
//   popup.style.display = 'none';
// });