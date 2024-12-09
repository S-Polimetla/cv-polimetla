// Download CV Button Click Handler
document.getElementById('download-btn').addEventListener('click', function() {
    // Google Docs export link (replace with your actual document ID)
    const googleDocsLink = 'https://docs.google.com/document/d/1HUYfghpYv76VRCU7QuNabNWrEpK0QhDjQzoCTbWwOAw/export?format=pdf';

    // Redirect the user to the Google Docs export link
    window.location.href = googleDocsLink;
});


// Submit Contact Form Button Click Handler
document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = {
        name: name,
        email: email,
        message: message,
    };

    try {
        const response = await fetch('YOUR_CONTACT_FORM_API_URL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('Thank you! Your message has been sent.');
            document.getElementById('contact-form').reset(); // Clear the form
        } else {
            alert('Thank you! This feature is still work in progress');
            document.getElementById('contact-form').reset(); // Clear the form
            // alert('Error sending message.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Network error.');
    }
});
