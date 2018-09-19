let bank = alert('Welcome To SandBond Bank \n Please Select Following Options \n 1. Balance Enquiry \n 2. Deposite Money \n 3. Withdraw Money');
let box1 = +prompt('Enter Your Option');
var Amount = 5000;
if (box1 == 1){
    let box2 = +prompt('Enter Your AC number:');
    console.log('Your Balance Is:', Amount);
}
if (box1 == 2){
    let box3 = +prompt('Enter The Amount Do You Want To Deposite');
    console.log('Your Money Is Deposited Succesfully');
    console.log('Your New Balence Is:', Amount+box3);
}
if (box1 == 3){
    var box5 = 200;
    var box = Amount+box5;
    let box4 = +prompt('Enter Amount Do You Want To Withdraw');
    console.log('Amount Is Withdraw From AC Sucesfully');
    console.log('Your New Balence Is:', box-box4);
}