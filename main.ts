import inquirer from "inquirer"

import chalk from "chalk"

//-------------SIMPLE CALCULATOR------------

const answer = await inquirer.prompt([
    {
        message: "Enter first number",
        type: "number",
        name: "FirstNumber",
    },
    {
        message: "Enter second number",
        type: "number",
        name: "SecondNumber",
    },
    {
        message: "Select the performing operator",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        name: "Operator",
    },
]);

if (answer.Operator === "Addition") {
    console.log(chalk.blue(answer.FirstNumber + answer.SecondNumber));
} else if (answer.Operator === "Subtraction") {
    console.log(chalk.blue(answer.FirstNumber - answer.SecondNumber));
} else if (answer.Operator === "Multiplication") {
    console.log(chalk.blue(answer.FirstNumber * answer.SecondNumber));
} else if (answer.Operator === "Division") {
    console.log(chalk.blue(answer.FirstNumber / answer.SecondNumber));
}