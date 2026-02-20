const startBtn = document.getElementById('startBtn');

startBtn.addEventListener('click', function() {
    // 1. Initialize score at 0
    let score = 0;

    // 2. Ask questions and process answers
    // Question 1: Sleep (Number data type)
    let sleepHours = Number(prompt("How many hours do you sleep per day?"));
    if (sleepHours >= 4) {
        score = score + 1;
    }

    // Question 2: Music (String data type)
    let likesMusic = prompt("Do you enjoy music? (yes/no)").toLowerCase();
    if (likesMusic === "yes") {
        score = score + 1;
    }

    // Question 3: Tiredness (Boolean concept)
    let getsTired = prompt("Do you get tired? (yes/no)").toLowerCase();
    if (getsTired === "yes") {
        score = score + 1;
    }

    // Question 4: Math Check
    let mathAnswer = Number(prompt("What is 5 + 5?"));
    if (mathAnswer === 10) {
        score = score + 1;
    }

    // 3. Final Result Logic
    let resultMessage = "";

    if (score >= 3) {
        resultMessage = "You are definitely human!";
    } else if (score >= 1) {
        resultMessage = "Half human, half robot!";
    } else {
        resultMessage = "Robot detected!";
    }

    // 4. Output the final decision
    alert("Your score: " + score + "\n" + resultMessage);
});