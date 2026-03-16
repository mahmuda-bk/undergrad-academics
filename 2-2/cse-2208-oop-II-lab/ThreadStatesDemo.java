class MyThread extends Thread {
    private String message;

    MyThread(String message) {
        this.message = message;
    }

    public void run() {
        System.out.println(getName() + " is RUNNING with priority " + getPriority());
        for (int i = 1; i <= 3; i++) {
            System.out.println(getName() + ": " + message + " (" + i + ")");
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println(getName() + " was interrupted.");
            }
        }
    }
}

public class ThreadStatesDemo {
    public static void main(String[] args) {
        MyThread t1 = new MyThread("Message from Thread 1");
        MyThread t2 = new MyThread("Message from Thread 2");
        MyThread t3 = new MyThread("Message from Thread 3");

        t1.setPriority(Thread.MIN_PRIORITY);
        t2.setPriority(Thread.NORM_PRIORITY);
        t3.setPriority(Thread.MAX_PRIORITY);

        System.out.println(t1.getName() + " state: " + t1.getState());
        System.out.println(t2.getName() + " state: " + t2.getState());
        System.out.println(t3.getName() + " state: " + t3.getState());

        t1.start();
        t2.start();
        t3.start();

        System.out.println("\nAfter starting threads:");
        System.out.println(t1.getName() + " state: " + t1.getState());
        System.out.println(t2.getName() + " state: " + t2.getState());
        System.out.println(t3.getName() + " state: " + t3.getState());

        try {
            t1.join();
            t2.join();
            t3.join();
        } catch (InterruptedException e) {
            System.out.println("Main thread interrupted.");
        }

        System.out.println("\nAfter threads finish:");
        System.out.println(t1.getName() + " state: " + t1.getState());
        System.out.println(t2.getName() + " state: " + t2.getState());
        System.out.println(t3.getName() + " state: " + t3.getState());
    }
}
