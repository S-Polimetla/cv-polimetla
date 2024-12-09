// Download CV Button Click Handler
document.getElementById('download-btn').addEventListener('click', async function(event) {
    event.preventDefault(); // Prevent page refresh
    
    try {
        // Call the API Gateway endpoint to trigger the Lambda function
        const response = await fetch('YOUR_API_GATEWAY_URL', {
            method: 'GET', // You can use POST if needed depending on your Lambda setup
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            // Handle the response (which should be the file download)
            const fileBlob = await response.blob();
            const fileURL = URL.createObjectURL(fileBlob);
            
            // Create a temporary link element to trigger the download
            const a = document.createElement('a');
            a.href = fileURL;
            a.download = 'Sriharsha_Polimetla_CV.pdf'; // Set the downloaded file name
            a.click();  // Programmatically click the link to start the download
            alert('Your CV is downloading...');
        } else {
            alert('Error downloading CV.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Network error.');
    }
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
            alert('Error sending message.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Network error.');
    }
});
