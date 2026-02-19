// script.js

// Function to handle form submission
const form = document.getElementById('predictionForm');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Make an API call for prediction
    try {
        const response = await fetch('/api/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        // Display prediction result
        document.getElementById('result').innerText = `Prediction: ${result.prediction}`;
    } catch (error) {
        console.error('Error during prediction:', error);
    }
});