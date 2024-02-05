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
    }
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
        let currency = priceElement.querySelector('.currency');

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

    // Add event listeners to each icon
    changePhotoIcon.addEventListener('click', function () {
        // Prompt the user for a new image URL
        let newImageUrl = prompt('Enter the new image URL:');

        // Check if the user entered a URL
        if (newImageUrl) {
            // Get the closest img element and update its src attribute
            let closestImg = icons.closest('.animation').querySelector('img');
            if (closestImg) {
                closestImg.src = newImageUrl;

                // Update the DOM to reflect the changes
                let cardId = parseInt(icons.closest('.card').id);
                let cardDataIndex = cardsData.findIndex(data => data.id === cardId);
                if (cardDataIndex !== -1) {
                    cardsData[cardDataIndex].imgSrc = newImageUrl;

                    // Save the updated array in local storage
                    localStorage.setItem('cardsData', JSON.stringify(cardsData));
                }
            } else {
                console.error('Could not find closest img element.');
            }
        }
    });

    // Add event listener for the "Edit" icon
    editIcon.addEventListener('click', function () {
        // Find the closest .card ancestor of the icons element
        let card = icons.closest('.card');

        // Find the corresponding data object based on the card's ID
        let cardId = parseInt(card.id);
        let cardDataIndex = cardsData.findIndex(data => data.id === cardId);

        // Prompt the user for new data based on the existing values
        let newName = prompt(`Enter the new name (current: ${cardsData[cardDataIndex].name}):`) || cardsData[cardDataIndex].name;
        let newDescription = prompt(`Enter the new description (current: ${cardsData[cardDataIndex].description}):`) || cardsData[cardDataIndex].description;
        let newPrice = prompt(`Enter the new price (current: ${cardsData[cardDataIndex].price}):`) || cardsData[cardDataIndex].price;
        let newCity = prompt(`Enter the new city (current: ${cardsData[cardDataIndex].location.city}):`) || cardsData[cardDataIndex].location.city;
        let newCountry = prompt(`Enter the new country (current: ${cardsData[cardDataIndex].location.country}):`) || cardsData[cardDataIndex].location.country;

        // Update the data in the array
        if (cardDataIndex !== -1) {
            // Directly assign new values to the properties of the existing cardData object
            cardsData[cardDataIndex].name = newName;
            cardsData[cardDataIndex].description = newDescription;
            cardsData[cardDataIndex].price = newPrice;
            cardsData[cardDataIndex].location.city = newCity;
            cardsData[cardDataIndex].location.country = newCountry;

            // Log the updated data object
            console.log(cardsData[cardDataIndex]);

            // Update the DOM to reflect the changes
            updateCardInDOM(cardsData[cardDataIndex]);

            // Save the updated array in local storage
            localStorage.setItem('cardsData', JSON.stringify(cardsData));
        }
    });

    // Add event listener for the "Delete" icon
    deleteIcon.addEventListener('click', function () {
        // Find the closest .card ancestor of the icons element
        let card = icons.closest('.card');

        // Find the corresponding data object based on the card's ID
        let cardId = parseInt(card.id);
        let cardDataIndex = cardsData.findIndex(data => data.id === cardId);

        // Remove the data object from the array
        if (cardDataIndex !== -1) {
            cardsData.splice(cardDataIndex, 1);

            // Remove the card from the DOM
            card.remove();

            // Save the updated array in local storage
            localStorage.setItem('cardsData', JSON.stringify(cardsData));
        }
    });
});
