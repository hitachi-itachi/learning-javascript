let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}



const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (guess !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = parseInt(prompt("Too high! Enter a new guess:"));
    } else {
        guess = parseInt(prompt("Too low! Enter a new guess:"));
    }
}
if (guess == 'q') {
    console.log("OK, YOU QUIT!");
} else {
    console.log(`YOU GOT It! It took you ${attempts} guess`);
}