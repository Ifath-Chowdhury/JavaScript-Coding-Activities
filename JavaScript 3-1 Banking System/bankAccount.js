// Defining BankAccount class
class BankAccount{
    constructor(accountNum, accountHolder, balance = 0){
        this.accountNum = accountNum;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    // Method for depositing money
    deposit(amount){
        this.balance += amount;
        console.log("£", amount, "Has been deposited into account number: ", this.accountNum);
    }

    // Method for withdrawing
    withdraw(amount){
        if (amount > this.balance){
            console.log("Insufficient funds. Withdrawal canceled.");
        } else {
            this.balance -= amount;
            console.log("£", amount, "Has been withdrawn from account number: ", this.accountNum);
        }
    }

    // Method to check balance
    checkBalance(){
        console.log("Balance for account number", this.accountNum, "is: ", this.balance);
        return this.balance;
    }
}

export default BankAccount;