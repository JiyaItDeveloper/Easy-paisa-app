#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlue.bold.underline("\n\tWELLCOME TO MY EASY PAISA APP ACCOUNT\n\t"));
let password = 1234;
let mybalance = 50000;
let cashback = 20;
let receive = 0;
let code = await inquirer.prompt([{
        name: "password",
        type: "number",
        message: "Please enter your 4 digit pin code"
    }]);
if (password === code.password) {
    console.log(chalk.bgGreenBright.bold("You are enter correct pin code"));
}
else {
    console.log("You are enter wrong pin code");
}
let easy_paisa = await inquirer.prompt([{
        name: "easy",
        type: "list",
        message: chalk.bgBlackBright("What would you like to do?"),
        choices: ["Transfer money", "Cash back", "Receive Amount", "Bill payment", "Easy load bundles", "Savings"]
    }]);
if (easy_paisa.easy === "Transfer money") {
    let operation = await inquirer.prompt([{
            name: "amount",
            type: "number",
            message: chalk.redBright.bold("How much amount you want to transfer?")
        }]);
    if (mybalance < operation.amount) {
        console.log(chalk.redBright.bold("You have insufficient Balance"));
    }
    else {
        (mybalance -= operation.amount);
        // console.log(`Your remaining balance is ${mybalance}`)
        console.log(chalk.bgRedBright.bold("Your amount has been transfered successfully"));
        console.log(chalk.bgBlueBright.bold(`You get the reward of ${cashback} Rs! Do more transaction & get the cash back rewards`));
    }
}
if (easy_paisa.easy === "Receive Amount") {
    console.log(chalk.bgRedBright.bold(`You have received ${cashback} Rs of cash back`));
    console.log(chalk.bgRedBright.bold(`Now your current balance is ${mybalance + cashback}`));
}
if (easy_paisa.easy === "Cash back") {
    (mybalance - receive);
    console.log(chalk.redBright.bold(`Your account has been credited of rs  ${cashback}`));
}
// console.log(`Your current balnce is Rs ${mybalance +cashback }`)
//  {( mybalance -receive)
//     console.log(`Your account has been credited of rs  ${mybalance}`)}
if (easy_paisa.easy === "Bill payment") {
    let Billpayment = await inquirer.prompt([{
            name: "payment",
            type: "number",
            message: chalk.yellowBright.bold("Please enter your amount")
        }]);
    if (mybalance < Billpayment.payment) {
        console.log(chalk.yellowBright.bold("You have insufficient balance"));
    }
    else {
        (mybalance -= Billpayment.payment);
        console.log(chalk.yellowBright.bold(`Your remaining balance is ${mybalance}`));
    }
}
if (easy_paisa.easy === "Easy load bundles") {
    let easyload = await inquirer.prompt([{
            name: "load",
            type: "list",
            message: chalk.bgRedBright.bold("Please enter your load amount"),
            choices: [100, 200, 300, 400, 500]
        }]);
    if (mybalance < easyload.load) {
        console.log(chalk.yellowBright.bold("You have insufficient balance"));
    }
    else {
        (mybalance -= easyload.load);
        console.log(chalk.bgBlackBright.bold('Your enter amount has been load successfully'));
        console.log(chalk.yellowBright.bold(`Your remaining balance is ${mybalance}`));
    }
}
;
//   (mybalance += cashback)
//  console.log(`you have received cash back of Rs ${cashback}`)
//  console.log(`Now your current balance is ${mybalance}`)
if (easy_paisa.easy === "Savings") {
    let save = await inquirer.prompt([{
            name: "cash",
            type: "list",
            message: ("In the amount of Rs"),
            choices: [10000, 20000, 30000, 40000, 50000],
        }]);
    let profitrate = 1;
    //    (profitrate/save.cash*100)
    console.log(chalk.yellowBright.bold(`You have received profit of Rs ${(profitrate / 100 * save.cash)}`));
}
console.log(chalk.bgGreenBright.bold("\n\tTHANK YOU FOR USING THIS APPLICATION"));
