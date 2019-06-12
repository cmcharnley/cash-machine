let balance = 1000;  //check balance, withdraw, deposit, change pin
let pin = 1234;

function chooseService() {
    const service = prompt('Which service do you require? 1.Withdraw cash 2.Deposit cash 3.Check balance 4.Change Pin');
    if (service==='1') {
        withdrawCash();
    } else if (service==='2') {
        depositCash();
    } else if (service === '3'){
        checkBalance();
    } else if (service === '4') {
        changePin();  
    } else alert('choose a valid service')
}
    
chooseService();

function withdrawCash() {
  
  let userWithdrawl = prompt('How much would you like to withdraw today?');
  balance -=userWithdrawl; 
  alert (`Your new balance is ${balance}`);
  chooseService();
  return balance;
}

function depositCash() {

    let deposit = prompt('How much would you like to deposit today?');
    let depositAmount = parseInt(deposit,10);
    balance +=depositAmount;
    alert (`Your new balance is ${balance}`);
    chooseService();
    return balance;
}

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
