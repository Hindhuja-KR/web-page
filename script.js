document.getElementById('greetingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById('name').value;
    const greetingMessage = document.getElementById('greetingMessage');

    greetingMessage.textContent = `Hello, ${name}! Welcome to the Greeting Page!`;
    greetingMessage.classList.remove('hidden');

    // Clear the input field
    document.getElementById('name').value = '';
});