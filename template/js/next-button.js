document.addEventListener("DOMContentLoaded", function() {
    // Change "Next" to "Seuraava"
    var nextButton = document.querySelector('.btn-default');  // Select the button with the class 'btn-default'
    if (nextButton && nextButton.textContent.trim() === 'Next') {  // Check if the button contains the text 'Next'
        nextButton.textContent = 'Seuraava';
    }

    // Similarly, if you have a "Previous" button, you can change its text to "Edellinen"
    var prevButton = document.querySelector('.btn-default');  // Adjust this selector if necessary
    if (prevButton && prevButton.textContent.trim() === 'Previous') {  // Check if the button contains the text 'Previous'
        prevButton.textContent = 'Edellinen';
    }
});
