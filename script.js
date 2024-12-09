document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Mock sending the form (replace with actual backend code if needed)
    document.getElementById('response-message').textContent = `Thank you, ${name}! Your message has been sent.`;

    // Optionally clear the form
    this.reset();
});
