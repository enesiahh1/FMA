// Get the element you need.
let section = document.getElementById(`section3div`);

// Get all the elements with the class 'card'
let cards = document.querySelectorAll('.card');

// Global variable to store card data
let cardsData = [
    {
        imgUrl: `images/card-1.jpeg`,
        id: `1`,
        name: `Cozy 5 Star Apartment`,
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci praesentium eligendi, deserunt quasi exercitationem, nam sunt quis iure quod voluptate deleniti obcaecati tempore facere blanditiis suscipit. Provident error. `,
        currency: `$`,
        price: `$899/night`,
        location: {
            city: `Barcelona`,
            country: `Spain`
        }
    },
    {
        imgUrl: `images/card-2.jpeg`,
        id: `2`,
        name: `Office Studio`,
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci praesentium eligendi, deserunt quasi exercitationem, nam sunt quis iure quod voluptate deleniti obcaecati tempore facere blanditiis suscipit. Provident error. `,
        currency: `$`,
        price: `$1.119/night`,
        location: {
            city: `London`,
            country: `UK`
        }
    },
    {
        imgUrl: `images/card-3.jpeg`,
        id: `3`,
        name: `Beautiful Castle`,
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci praesentium eligendi, deserunt quasi exercitationem, nam sunt quis iure quod voluptate deleniti obcaecati tempore facere blanditiis suscipit. Provident error. `,
        currency: `$`,
        price: `$459/night`,
        location: {
            city: `Milan`,
            country: `Italy`
        }
    }
];

// Check if there is any data already stored in local storage
let storedCardsData = JSON.parse(localStorage.getItem('cardsData'));

// If no data is found, set the initial cardsData and store it in local storage
if (!storedCardsData) {
    localStorage.setItem('cardsData', JSON.stringify(cardsData));
    storedCardsData = JSON.parse(localStorage.getItem('cardsData'));
}


storedCardsData.forEach(card => {
    // Create a new <div> for the card
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.id = card.id;

    // Populate the card div with the properties of the card object
    cardDiv.innerHTML = `
    <div class="animation">
        <img src="${card.imgUrl}" alt="card-1">
        <div class="animationIcons">
            <span class="material-symbols-outlined cgrey cpointer changePhoto" title="More">
                photo_library
            </span>
            <span class="material-symbols-outlined cgreen cpointer edit" title="Edit">
                edit
            </span>
            <span class="material-symbols-outlined cred cpointer delet" title="Close">
                close
            </span>
        </div>
    </div>
    <h1 class="cardH1 name">${card.name}</h1>
    <p class="description">${card.description}</p>
    <hr>
    <div class="cardBottom">
        <h1 class="price">${card.price}</h1>
        <p class="cardBottomP location"><span class="material-symbols-outlined">
                location_on
            </span> <span class="city">${card.location.city}</span>,<span class="country">${card.location.country}</span></p>
    </div>
    `;

    // Append the card div to the section
    section.appendChild(cardDiv);
});

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
        let cardId = icons.closest('.card').id;
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
                cardsData[cardDataIndex].imgUrl = newImageUrl;
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
        editIcon.innerHTML = `<span class="material-symbols-outlined">
        save
        </span>`;

        // Find the corresponding data object based on the card's ID
        let cardId = card.id;
        let cardDataIndex = cardsData.findIndex(data => data.id === cardId);

        // Get the elements inside the card for editing
        let nameElement = card.querySelector('.name');
        let descriptionElement = card.querySelector('.description');
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

            editIcon.innerHTML = `edit`
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
            console.log(nameElement.textContent)
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
        let cardId = card.id;
        // Remove the card from the DOM
        card.remove();

        // Find the index of the object with the matching ID in the cardsData array
        let indexToDelete = cardsData.findIndex(data => data.id === cardId);

        // If the object with the matching ID is found, remove it from the array
        if (indexToDelete !== -1) {
            cardsData.splice(indexToDelete, 1);

            // Update local storage
            localStorage.setItem('cardsData', JSON.stringify(cardsData));
        }
    });
});
