let balance = 1000;  //check balance, withdraw, deposit, change pin
let pin = 1234;

function chooseService() {
    const service = prompt('Which service do you require? 1.Withdraw cash 2.Deposit cash 3.Check balance 4.Change Pin');
    switch (service) {
        case "1":
            withdrawCash();
            break;
        case "2":
            depositCash();
            break;
        case "3":
            checkBalance();
            break;
        case "4":
            changePin();
            break;
        default:
            alert('Choose a valid service');
    }
}

/* 
    function to choose a service. The variable is called service which is equal to the prompt given by the user.
    whenever the input matches the if statement, it will run the code.
*/

// calling the function.
chooseService();

function withdrawCash() {
  
  let userWithdrawl = prompt('How much would you like to withdraw today?');
  balance -=userWithdrawl; 
  alert (`Your new balance is ${balance}`);
  chooseService();
  return balance;
}

/* 

    userWithdrawl is taken from the prompt. Balance is deducted using the userWithdrawl value. 
    New alert for the balance. 
    Call the chooseService
    return the balance so we can use it elsewhere
*/

function depositCash() {

    let deposit = prompt('How much would you like to deposit today?');
    let depositAmount = parseInt(deposit,10);
    balance +=depositAmount;
    alert (`Your new balance is ${balance}`);
    chooseService();
    return balance;
}

/*

    parseInt is used to parse a string and return an integer. Before doing this, the deposit function was returning concat. numbers. If the 
    string begins with any other number than 0, the base/radix is 10 (decimal)
*/

function checkBalance() {
    alert (`Your balance is ${balance}`);
    chooseService();
}

function changePin() {
    let pinCheck = prompt('Please enter your current pin to change pin');

    if (pinCheck == pin) {
        pin = prompt('Please enter your new pin');
        alert (`Your pin has been changed to ${pin}`);
        chooseService();
        return pin;
    } else {
        alert('incorrect pin, try again')
    }
    chooseService();
    }
