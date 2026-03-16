package banksimulation;

class BankAccount {
    private int balance;

    public BankAccount(int balance) {
        this.balance = balance;
    }

    public synchronized void withdraw(int amount, String threadName) {
        System.out.println(threadName + " is trying to withdraw " + amount);

        if (balance >= amount) {
            System.out.println(threadName + " is processing withdrawal...");
            try {
                Thread.sleep(1000); 
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            balance -= amount;
            System.out.println(threadName + " completed withdrawal. Remaining balance: " + balance);
        } else {
            System.out.println(threadName + " Insufficient funds! Withdrawal denied.");
        }
    }

    public int getBalance() {
        return balance;
    }
}



class WithdrawThread extends Thread {
    private BankAccount account;
    private int amount;

    public WithdrawThread(BankAccount account, int amount, String name) {
        super(name);
        this.account = account;
        this.amount = amount;
    }

    public void run() {
        account.withdraw(amount, getName());
    }
}

public class BankSimulation {
    public static void main(String[] args) {
        BankAccount account = new BankAccount(2000);

        WithdrawThread t1 = new WithdrawThread(account, 1000, "Thread-1");
        WithdrawThread t2 = new WithdrawThread(account, 1500, "Thread-2");
        WithdrawThread t3 = new WithdrawThread(account, 500, "Thread-3");

        t1.start();
        t2.start();
        t3.start();
    }
}
