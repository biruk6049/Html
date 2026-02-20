// Selecting the button from the HTML
const btn = document.getElementById('checkBtn');

btn.addEventListener('click', function() {
    // 1. Get input using prompts (Variables)
    let budget = parseFloat(prompt("Enter your monthly budget:"));
    let itemPrice = parseFloat(prompt("Enter the price of the item:"));
    let savings = parseFloat(prompt("Enter your current savings (optional - enter 0 if none):")) || 0;

    // 2. Logic (Operators & If/Else)
    let totalAvailable = budget + savings;

    if (isNaN(budget) || isNaN(itemPrice)) {
        alert("Please enter valid numbers!");
    } else if (itemPrice <= totalAvailable) {
        alert("Success! You can afford this. Total available: $" + totalAvailable);
    } else {
        let missing = itemPrice - totalAvailable;
        alert("Better wait. You are short by $" + missing.toFixed(2));
    }
});