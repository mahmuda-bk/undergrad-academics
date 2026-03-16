package chatsimulation;

class Chat {
    private boolean user1Turn = true;

    public synchronized void send(String msg, boolean fromUser1) {
        try {
            while (user1Turn != fromUser1) {
                wait();
            }

            System.out.println((fromUser1 ? "User1" : "User2") + ": " + msg);

            user1Turn = !user1Turn;
            notify();
        } catch (InterruptedException e) {
            System.out.println(e.getMessage());
        }
    }
}

class User1 implements Runnable {
    private Chat chat;
    private String[] messages = { "Hi!", "How are you?", "I'm fine too.", "Bye!" };

    public User1(Chat chat) {
        this.chat = chat;
        new Thread(this, "User1").start();
    }

    public void run() {
        for (String msg : messages) {
            chat.send(msg, true);
        }
    }
}

class User2 implements Runnable {
    private Chat chat;
    private String[] messages = { "Hello!", "I'm good, thanks!", "What are you doing?", "See you!" };

    public User2(Chat chat) {
        this.chat = chat;
        new Thread(this, "User2").start();
    }

    public void run() {
        for (String msg : messages) {
            chat.send(msg, false);
        }
    }
}

public class ChatSimulation {
    public static void main(String[] args) {
        Chat chat = new Chat();
        new User1(chat);
        new User2(chat);
    }
}
