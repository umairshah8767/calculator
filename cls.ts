import inquirer from "inquirer";

const calculator = await inquirer.prompt([
    { message:"enter first number",type:"number",name:"firstNumber" },
    { message:"enter second number",type:"number",name:"secondNumber" },
    {
        message:"select one of the operator to perform function",
        type:"list",
        name:"operator",
        choices:["addition","subtraction","Division","multiplication"],
    }
]);

       console.log(calculator);

       if (calculator.operator === "addition"){
        console.log(calculator.firstNumber + calculator.secondNumber)
       }
       else if (calculator.operator === "addition"){
        console.log(calculator.firstNumber + calculator.secondNumber)
       }else if (calculator.operator === "subtraction"){
        console.log(calculator.firstNumber - calculator.secondNumber)
       }else if (calculator.operator === "Division"){
        console.log(calculator.firstNumber / calculator.secondNumber)
       }else if (calculator.operator === "multiplication"){
        console.log(calculator.firstNumber * calculator.secondNumber)
       }
