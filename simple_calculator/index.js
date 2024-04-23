import inquirer from "inquirer";
// Asking questions from Users through inquirer.
let answers = await inquirer.prompt([
    { message: "Enter first number!", type: "number", name: "firstNumber" },
    { message: "Enter second number!", type: "number", name: "secondNumber" },
    {
        message: "Select one Operator to perform Operations!",
        type: "list",
        name: "Operator",
        choices: ["Additon", "Subtraction", "Multiplication", "Division"]
    },
]);
// conditional statements if-Else!
if (answers.Operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.Operator === "Subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.Operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.Operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("Invalid Input!");
}
