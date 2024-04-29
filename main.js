#! /usr/bin/env node
import inquirer from "inquirer";
const input = await inquirer.prompt([
    { name: "num1",
        type: "number",
        message: "Enter frist number",
    },
    { name: "num2",
        type: "number",
        message: "Enter sceond number",
    },
    { name: "operator",
        type: "list",
        choices: ["addition", "multiplication", "division", "substraction"],
        message: "select one of the given option",
    }
]);
if (input.operator === "addition") {
    console.log(input.num1 + input.num2);
}
else if (input.operator === "substraction") {
    console.log(input.num1 - input.num2);
}
else if (input.operator === "division") {
    console.log(input.num1 / input.num2);
}
else if (input.operator === "multiplication") {
    console.log(input.num1 * input.num2);
}
