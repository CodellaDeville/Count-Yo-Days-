document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const age = document.getElementById('age').value;
    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ age: parseFloat(age) }),
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('result');
        if (data.error) {
            resultDiv.textContent = data.error;
        } else {
            const daysLeft = data.days_left;
            if (daysLeft < 0) {
                resultDiv.textContent = `It looks like you've already surpassed the average lifespan.`;
            } else {
                resultDiv.textContent = `You have approximately ${daysLeft.toLocaleString()} days left based on an average lifespan of 30,000 days.`;
            }
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
