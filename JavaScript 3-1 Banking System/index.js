// Entry point for the banking system
import BankAccount from "./bankAccount.js";

const account1 = new BankAccount(264982, "Dave Account", 200);
const account2 = new BankAccount(324872905, "Johnny Account");

// Deposit money
account1.deposit(800);
account2.deposit(1000);

// Withdraw money
account1.withdraw(50);
account2.withdraw(999999);

// Check balances
account1.checkBalance();
account2.checkBalance();