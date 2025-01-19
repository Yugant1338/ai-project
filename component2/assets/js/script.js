// Listen for changes in the language select dropdown
    document.getElementById('languageSelect').addEventListener('change', function () {
        const textInput = document.getElementById("textInput");
        textInput.disabled = this.value == "nolang";
        const selectedLanguage = this.value;
        const selectedOption = this.options[this.selectedIndex];
        const selectedText = selectedOption.text;
         // Update the placeholder based on the selected language
    if (selectedLanguage === "nolang") {
        textInput.placeholder = "Enter something...";
    } else{
        textInput.placeholder = "Enter text in "+selectedText+"...";
    } 
    });

// Show the modal when the submit button is clicked
function showModal() {
    let languageSelect = document.getElementById('languageSelect');
    let textInput = document.getElementById("textInput");
    let inputText = textInput.value.trim();
    let output=languageSelect.value;
    // Check if a language is selected and if text is entered
    if (output=="nolang") {
        alert('Please select a language before entering text!');
        return; // Prevent the modal from showing
    }

    if (inputText === "") {
        alert('Please enter text before submitting!');
        return;// Prevent the modal from showing
    }
    const videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
    videoModal.show();
}

// Close the modal
function closeModal() {
    const modalElement = document.getElementById('videoModal');
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance.hide();
}

// Loop the video when it ends
document.getElementById('videoElement').addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
});

// Allow pressing "Enter" to trigger modal validation
document.getElementById('textInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        showModal();
    }
});
