package pingponggame;

class PingPong {
    private boolean pingTurn = true; 

  
    public synchronized void ping() {
        try {
            while (!pingTurn) {
                wait();
            }
            System.out.println("Ping");
            pingTurn = false;
            notify();
        } catch (InterruptedException e) {
            System.out.println(e.getMessage());
        }
    }

    public synchronized void pong() {
        try {
            while (pingTurn) {
                wait(); 
            }
            System.out.println("Pong");
            pingTurn = true;
            notify(); 
        } catch (InterruptedException e) {
            System.out.println(e.getMessage());
        }
    }
}

class PingThread extends Thread {
    private PingPong game;

    public PingThread(PingPong game) {
        this.game = game;
    }

    public void run() {
        for (int i = 0; i < 5; i++) { 
            game.ping();
            try {
                Thread.sleep(500); 
            } catch (InterruptedException e) {}
        }
    }
}

class PongThread extends Thread {
    private PingPong game;

    public PongThread(PingPong game) {
        this.game = game;
    }

    public void run() {
        for (int i = 0; i < 5; i++) {
            game.pong();
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {}
        }
    }
}

public class PingPongGame {
    public static void main(String[] args) {
        PingPong game = new PingPong();

        PingThread ping = new PingThread(game);
        PongThread pong = new PongThread(game);

        ping.start();
        pong.start();
    }
}