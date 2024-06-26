console.log(`im the settings`);

// Get the span element inside the settings
let settingsToggle = document.querySelector('#settings > span');

// Get the settings options element
let settingsOptions = document.querySelector('#settingsOpsions');

// Add click event listener to the settings toggle
settingsToggle.addEventListener('click', function (event) {

    event.stopPropagation();

    // Toggle the display property of the settings options
    if (settingsOptions.style.display === 'flex') {
        settingsOptions.style.display = 'none';
        body.removeEventListener('click', bodyClickHandler);
    } else {
        settingsOptions.style.display = 'flex';
        body.addEventListener('click', bodyClickHandler);
    }
});

function bodyClickHandler(event) {
    // Check if the click event is not inside the settings options
    if (!settingsOptions.contains(event.target)) {
        settingsOptions.style.display = 'none';
        body.removeEventListener('click', bodyClickHandler);
    }
}


// Get all the color balls
let colorBalls = document.querySelectorAll('.colorBar .ball');
let activeClassElement = document.querySelector('.active');
let root = document.documentElement;
// Add click event listener to each color ball
colorBalls.forEach(function (ball) {
    ball.addEventListener('click', function () {
        // Remove 'activeBall' class from all color balls
        colorBalls.forEach(function (ball) {
            ball.classList.remove('activeBall');
        });

        // Add 'activeBall' class to the clicked ball
        ball.classList.add('activeBall');

        let colorOfBall = window.getComputedStyle(ball).backgroundColor;
        // Update the background color of the '.active' class
        activeClassElement.style.backgroundColor = colorOfBall;

        // Change the value of the CSS variable
        root.style.setProperty('--ball-color', colorOfBall);
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
            aside.style.background = `${color}, url(${backgroundImageUrl})`;
            aside.style.backgroundSize = "cover"; // Adjust background size as needed
        } else {
            aside.style.background = `${color}`
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
        // Checkbox is not checked, set the background with the URL
        aside.style.background = `${color}, url(${backgroundImageUrl})`;
        aside.style.backgroundSize = "cover";
    } else {
        // Checkbox is checked, remove the URL from the background
        aside.style.background = color; // Set the background to the color gradient only
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
        root.style.setProperty('--ball-color', customization.ballColor);


        if (checkbox.checked) {
            aside.style.background = `${color}, url(${backgroundImageUrl})`;
            aside.style.backgroundSize = "cover";
        } else {
            aside.style.background = color;
        }
    }
}

// Call the function to load customization data from local storage when the page is loaded
loadCustomizationFromLocalStorage();

// Add event listener to window to save customization data when the page is unloaded
window.addEventListener('unload', saveCustomizationToLocalStorage);

// Get the computed style of an element
let computedStyle = window.getComputedStyle(document.documentElement);

// Get the value of a CSS variable
let variableValue = computedStyle.getPropertyValue('--ball-color').trim();
console.log(variableValue);
console.log(color);

// Now, variableValue contains the value of the CSS variable '--your-css-variable-name'


// Function to add the active class to the element that matches the stored value
function setActiveClass(elements, storedValue) {
    elements.forEach((element) => {
        let computedStyle = window.getComputedStyle(element);
        let backgroundColor = computedStyle.getPropertyValue('background-color');
        if (backgroundColor === storedValue || element.getAttribute('src') === storedValue) {
            element.classList.add('activeBall');
        } else {
            element.classList.remove('activeBall');
        }
    });
}

// Call the function to set the active class for color balls
setActiveClass(colorBalls, variableValue);

// Call the function to set the active class for color balls inside .settingsImgCheck div
setActiveClass(colorBalls2, color);

// Call the function to set the active class for images inside colorBar
setActiveClass(colorBarImages, backgroundImageUrl);

if (color == `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))`) {
    let asideColorBall = document.getElementById(`black`);
    asideColorBall.classList.add(`activeBall`);
} else {
    let asideColorBall = document.getElementById(`white`);
    console.log(asideColorBall)
    asideColorBall.classList.add(`activeBall`);
}

