console.log(`im the settings`);

// Get the span element inside the settings
let settingsToggle = document.querySelector('#settings > span');

// Get the settings options element
let settingsOptions = document.querySelector('#settingsOpsions');

// Add click event listener to the settings toggle
settingsToggle.addEventListener('click', function () {
    // Toggle the display property of the settings options
    if (settingsOptions.style.display === 'flex') {
        settingsOptions.style.display = 'none';
    } else {
        settingsOptions.style.display = 'flex';
    }
});

body.addEventListener(`dblclick`, () => {
    if (settingsOptions.style.display == `flex`) {
        settingsOptions.style.display = `none`;
    }
})


// Get all the color balls
let colorBalls = document.querySelectorAll('.colorBar .ball');
let activeClassElement = document.querySelector('.active');
// Add click event listener to each color ball
colorBalls.forEach(function (ball) {
    ball.addEventListener('click', function () {
        // Remove 'activeBall' class from all color balls
        colorBalls.forEach(function (ball) {
            ball.classList.remove('activeBall');
        });

        // Add 'activeBall' class to the clicked ball
        ball.classList.add('activeBall');

        // Update the background color of the '.active' class
        activeClassElement.style.backgroundColor = window.getComputedStyle(ball).backgroundColor;;
    });
});

// Get all the color balls inside the .settingsImgCheck div
let colorBalls2 = document.querySelectorAll('.settingsImgCheck .ball');

// Get the aside element
let aside = document.getElementById('aside');
let color = `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))`;;

// Add click event listener to each color ball
colorBalls2.forEach(function (ball) {
    ball.addEventListener('click', function () {

        // Remove 'activeBall' class from all color balls
        colorBalls2.forEach(function (ball) {
            ball.classList.remove('activeBall');
        });

        // Add 'activeBall' class to the clicked ball
        ball.classList.add('activeBall');

        if (ball.classList.contains(`black`)) {
            color = `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))`;
        } else {
            color = `linear-gradient(0deg, rgba(127, 127, 127, 0.7), rgba(127, 127, 127, 0.7))`;
        }
        if (checkbox.checked) {
            aside.style.background = `${color}`
        } else {
            aside.style.background = `${color}, url(${backgroundImageUrl})`;
            aside.style.backgroundSize = "cover"; // Adjust background size as needed
        }
    });
});

// Get the checkbox element
let checkbox = document.getElementById('checkbox');

// URL variable to store the image URL
let backgroundImageUrl = 'images/sidebar-1.jpg';

// Add change event listener to the checkbox
checkbox.addEventListener('change', function () {
    // Check if the checkbox is checked
    if (this.checked) {
        // Checkbox is checked, remove the URL from the background
        aside.style.background = color; // Set the background to the color gradient only
    } else {
        // Checkbox is not checked, set the background with the URL
        aside.style.background = `${color}, url(${backgroundImageUrl})`;
        aside.style.backgroundSize = "cover";
    }
});

// Get all the images inside the colorBar
let colorBarImages = document.querySelectorAll('.colorBar img');

// Add click event listener to each image
colorBarImages.forEach(function (image) {
    image.addEventListener('click', function () {

        // Remove 'activeBall' class from all color balls
        colorBarImages.forEach(function (image) {
            image.classList.remove('activeBall');
        });

        // Add 'activeBall' class to the clicked ball
        image.classList.add('activeBall');

        // Get the source of the clicked image
        let imageUrl = image.getAttribute('src');
        backgroundImageUrl = imageUrl;
        if (checkbox.checked) {
        } else {
            aside.style.backgroundImage = `${color} ,url(${backgroundImageUrl})`;
        }
    });
});

// Function to save customization data to local storage
function saveCustomizationToLocalStorage() {
    localStorage.setItem('customization', JSON.stringify({ color: color, checkbox: checkbox.checked, backgroundImageUrl: backgroundImageUrl, ballColor: activeClassElement.style.backgroundColor }));
}

// Function to load customization data from local storage
function loadCustomizationFromLocalStorage() {
    let customization = JSON.parse(localStorage.getItem('customization'));
    if (customization) {
        color = customization.color;
        checkbox.checked = customization.checkbox;
        backgroundImageUrl = customization.backgroundImageUrl;
        activeClassElement.style.background = customization.ballColor;

        if (checkbox.checked) {
            aside.style.background = color;
        } else {
            aside.style.background = `${color}, url(${backgroundImageUrl})`;
            aside.style.backgroundSize = "cover";
        }
    }
}

// Call the function to load customization data from local storage when the page is loaded
loadCustomizationFromLocalStorage();

// Add event listener to window to save customization data when the page is unloaded
window.addEventListener('unload', saveCustomizationToLocalStorage);
