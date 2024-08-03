document.addEventListener('DOMContentLoaded', function() {
    function calculateDaysLeft(ageInYears, averageLifespanDays = 30000) {
        // Convert age from years to days
        const ageInDays = ageInYears * 365;
        // Calculate days left
        const daysLeft = averageLifespanDays - ageInDays;
        return daysLeft;
    }

    function main() {
        const resultDiv = document.getElementById('result');
        const ageInput = document.getElementById('ageInput');
        const button = document.getElementById('calculateButton');

        button.addEventListener('click', function() {
            const age = parseFloat(ageInput.value);
            if (isNaN(age) || age < 0) {
                resultDiv.textContent = "Invalid input. Please enter a numeric value for age.";
                return;
            }

            const daysLeft = calculateDaysLeft(age);
            if (daysLeft < 0) {
                resultDiv.textContent = "It looks like you've already surpassed the average lifespan.";
            } else {
                resultDiv.textContent = `You have approximately ${daysLeft.toLocaleString()} days left based on an average lifespan of 30,000 days.`;
            }
        });

        // Add clock images
        for (let i = 0; i < 10; i++) {
            const clock = document.createElement('div');
            clock.className = 'clock';
            clock.style.top = `${Math.random() * 100}%`;
            clock.style.left = `${Math.random() * 100}%`;
            document.body.appendChild(clock);
        }
    }

    main();
});
