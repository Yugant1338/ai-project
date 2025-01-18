function showModal() {
    const inputText = document.getElementById("textInput").value;
    if (inputText.trim()) {
        const videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
        videoModal.show();
    } else {
        alert('Please enter text before submitting!');
    }
}

function closeModal() {
    const modalElement = document.getElementById('videoModal');
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance.hide();
}
document.getElementById('videoElement').addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
});
document.getElementById('textInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        showModal();
    }
});