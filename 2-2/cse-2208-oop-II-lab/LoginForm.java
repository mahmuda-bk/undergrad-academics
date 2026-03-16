
package loginform;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class LoginForm extends JFrame implements ActionListener {
    JTextField usernameField;
    JPasswordField passwordField;
    JButton loginButton, clearButton;
    JLabel messageLabel;

    public LoginForm() {
        setTitle("Login Form");
        setSize(300, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new GridLayout(4, 2, 5, 5));
        setLocationRelativeTo(null);

        add(new JLabel("Username:"));
        usernameField = new JTextField();
        add(usernameField);

        add(new JLabel("Password:"));
        passwordField = new JPasswordField();
        add(passwordField);

        loginButton = new JButton("Login");
        clearButton = new JButton("Clear");
        add(loginButton);
        add(clearButton);

        messageLabel = new JLabel("", SwingConstants.CENTER);
        add(messageLabel);

        loginButton.addActionListener(this);
        clearButton.addActionListener(this);

        setVisible(true);
    }

    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == loginButton) {
            String user = usernameField.getText();
            String pass = new String(passwordField.getPassword());

            if (user.equals("admin") && pass.equals("1234")) {
                messageLabel.setText("Login Successful!");
                messageLabel.setForeground(Color.GREEN);
            } else {
                messageLabel.setText("Invalid Username or Password");
                messageLabel.setForeground(Color.RED);
            }
        } else if (e.getSource() == clearButton) {
            usernameField.setText("");
            passwordField.setText("");
            messageLabel.setText("");
        }
    }

    public static void main(String[] args) {
        new LoginForm();
    }
}
