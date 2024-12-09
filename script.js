document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = {
        name: name,
        email: email,
        message: message,
    };

    try {
        const response = await fetch('YOUR_API_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('Thank you! Your message has been sent.');
        } else {
            alert('Error sending message.');
        }
    } catch (error) {
        alert('Network error.');
        console.error('Error:', error);
    }
});
