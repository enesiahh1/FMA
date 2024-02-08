console.log(`I'm in the listings`);

// Get the element you need.
let section = document.getElementById(`section3`);

// Get all the elements with the class 'card'
let cards = document.querySelectorAll('.card');

// Global variable to store card data
let cardsData = [];

// Function to update the DOM based on the cardData array
function updateCardInDOM(cardData) {
    // Find the card in the DOM based on its ID
    let cardElement = document.getElementById(cardData.id);

    if (cardElement) {
        // Update the content of the card
        cardElement.querySelector('.name').innerHTML = cardData.name;
        cardElement.querySelector('.descripton').innerHTML = cardData.description;
        cardElement.querySelector('.price').innerHTML = cardData.price;
        cardElement.querySelector('.city').innerHTML = cardData.location.city;
        cardElement.querySelector('.country').innerHTML = cardData.location.country;
        updateImagesFromData();
    }
}

function updateImagesFromData() {
    // Iterate through the cardsData array
    cardsData.forEach(function (cardData) {
        // Find the corresponding card element based on the card's ID
        let cardElement = document.getElementById(cardData.id);

        // If the card element exists and the card data has a new imgSrc property
        if (cardElement && cardData.imgSrc) {
            // Find the img element within the card
            let imgElement = cardElement.querySelector('img');

            // Update the src attribute of the img element with the new imgSrc
            imgElement.src = cardData.imgSrc;
        }
    });
}

// Event listener for when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve data from local storage or initialize an empty array
    cardsData = JSON.parse(localStorage.getItem('cardsData')) || [];

    // Iterate through the array and update existing cards in the DOM
    cardsData.forEach(function (cardData) {
        updateCardInDOM(cardData);
    });
});

// Iterate through each card
cards.forEach(function (card, index) {
    // Get the elements inside each card
    let h1Element = card.querySelector('.name');
    let pElement = card.querySelector('.descripton');
    let priceElement = card.querySelector('.price');
    let locationElement = card.querySelector('.location');

    // Check if elements exist
    if (h1Element && pElement && priceElement && locationElement) {
        // Extract city and country from the location element
        let cityElement = locationElement.querySelector('.city');
        let countryElement = locationElement.querySelector('.country');

        // Create a card object
        let cardObject = {
            id: index + 1, // Use index + 1 as the ID
            name: h1Element.textContent.trim(),
            description: pElement.textContent.trim(),
            price: priceElement.textContent.trim(),
            currency: '$', // You can customize this based on your needs
            location: {
                city: cityElement.textContent.trim(),
                country: countryElement.textContent.trim()
            }
        };

        // Push the card object to the array
        cardsData.push(cardObject);
    }
});

// Save the array in local storage only if it's not already stored
if (!localStorage.getItem('cardsData')) {
    localStorage.setItem('cardsData', JSON.stringify(cardsData));
}

// Get all the elements with the class 'animationIcons'
let animationIcons = document.querySelectorAll('.animationIcons');

// Iterate through each animationIcons element
animationIcons.forEach(function (icons) {
    // Get the child elements (icons) of each animationIcons element
    let changePhotoIcon = icons.querySelector('.changePhoto');
    let editIcon = icons.querySelector('.edit');
    let deleteIcon = icons.querySelector('.delet');

    changePhotoIcon.addEventListener('click', function () {
        // Find the closest img element
        let closestImg = icons.closest('.animation').querySelector('img');

        // Find the corresponding data object based on the card's ID
        let cardId = parseInt(icons.closest('.card').id);
        let cardDataIndex = cardsData.findIndex(data => data.id === cardId);

        // Prompt the user for a new image URL
        let newImageUrl = prompt('Enter the new image URL:');

        // Check if the user entered a URL
        if (newImageUrl) {
            // Update the src attribute of the <img> element
            closestImg.src = newImageUrl;

            // Update or add the image source to the corresponding cardData object
            if (cardDataIndex !== -1) {
                // If the card data exists, update the imgSrc property
                cardsData[cardDataIndex].imgSrc = newImageUrl;
            } else {
                // If the card data doesn't exist, create a new object and add it to the array
                cardsData.push({
                    id: cardId,
                    imgSrc: newImageUrl
                });
            }

            // Save the updated array in local storage
            localStorage.setItem('cardsData', JSON.stringify(cardsData));
        } else {
            console.error('No image URL provided.');
        }
    });


    // Add event listener for the "Edit" icon
    editIcon.addEventListener('click', function () {
        // Find the closest .card ancestor of the icons element
        let card = icons.closest('.card');

        // Find the corresponding data object based on the card's ID
        let cardId = parseInt(card.id);
        let cardDataIndex = cardsData.findIndex(data => data.id === cardId);

        // Get the elements inside the card for editing
        let nameElement = card.querySelector('.name');
        let descriptionElement = card.querySelector('.descripton');
        let priceElement = card.querySelector('.price');
        let cityElement = card.querySelector('.city');
        let countryElement = card.querySelector('.country');

        // Check if the card is in edit mode
        let edited = nameElement.contentEditable === 'true';

        // Toggle content editing for each element
        if (!edited) {
            // Enable content editing for each element
            nameElement.contentEditable = true;
            descriptionElement.contentEditable = true;
            priceElement.contentEditable = true;
            cityElement.contentEditable = true;
            countryElement.contentEditable = true;

            // Add a border or some visual indication to show that the elements are editable
            nameElement.style.border = '1px solid #ccc';
            descriptionElement.style.border = '1px solid #ccc';
            priceElement.style.border = '1px solid #ccc';
            cityElement.style.border = '1px solid #ccc';
            countryElement.style.border = '1px solid #ccc';
        } else {
            // Disable content editing for each element
            nameElement.contentEditable = false;
            descriptionElement.contentEditable = false;
            priceElement.contentEditable = false;
            cityElement.contentEditable = false;
            countryElement.contentEditable = false;

            // Remove the border or visual indication
            nameElement.style.border = 'none';
            descriptionElement.style.border = 'none';
            priceElement.style.border = 'none';
            cityElement.style.border = 'none';
            countryElement.style.border = 'none';

            // Update the data in the array
            cardsData[cardDataIndex].name = nameElement.textContent.trim();
            cardsData[cardDataIndex].description = descriptionElement.textContent.trim();
            cardsData[cardDataIndex].price = priceElement.textContent.trim();
            cardsData[cardDataIndex].location.city = cityElement.textContent.trim();
            cardsData[cardDataIndex].location.country = countryElement.textContent.trim();

            // Log the updated data object
            console.log(cardsData[cardDataIndex]);

            // Save the updated array in local storage
            localStorage.setItem('cardsData', JSON.stringify(cardsData));
        }
    });



    // Add event listener for the "Delete" icon
    deleteIcon.addEventListener('click', function () {
        // Find the closest .card ancestor of the icons element
        let card = icons.closest('.card');
        // Remove the card from the DOM
        card.remove();

    });
});
