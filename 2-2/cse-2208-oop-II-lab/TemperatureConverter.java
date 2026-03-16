
package temperatureconverter;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class TemperatureConverter extends JFrame implements ActionListener {
    JTextField tempInput;
    JLabel resultLabel;
    JButton toCelsiusBtn, toFahrenheitBtn, clearBtn;

    public TemperatureConverter() {

        setTitle("Temperature Converter");
        setSize(300, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new GridLayout(4, 1, 5, 5));
        setLocationRelativeTo(null); // Center window

        tempInput = new JTextField();
        add(new JLabel("Enter Temperature:"));
        add(tempInput);

        JPanel panel = new JPanel();
        toCelsiusBtn = new JButton("To Celsius");
        toFahrenheitBtn = new JButton("To Fahrenheit");
        clearBtn = new JButton("Clear");

        panel.add(toCelsiusBtn);
        panel.add(toFahrenheitBtn);
        panel.add(clearBtn);
        add(panel);

        resultLabel = new JLabel("", SwingConstants.CENTER);
        add(resultLabel);

        toCelsiusBtn.addActionListener(this);
        toFahrenheitBtn.addActionListener(this);
        clearBtn.addActionListener(this);

        setVisible(true);
    }

    public void actionPerformed(ActionEvent e) {
        try {
            double temp = Double.parseDouble(tempInput.getText());
            if (e.getSource() == toCelsiusBtn) {
                double celsius = (temp - 32) * 5 / 9;
                resultLabel.setText(String.format("= %.2f °C", celsius));
            } else if (e.getSource() == toFahrenheitBtn) {
                double fahrenheit = (temp * 9 / 5) + 32;
                resultLabel.setText(String.format("= %.2f °F", fahrenheit));
            } else if (e.getSource() == clearBtn) {
                tempInput.setText("");
                resultLabel.setText("");
            }
        } catch (NumberFormatException ex) {
            resultLabel.setText("Enter a valid number!");
        }
    }

    public static void main(String[] args) {
        new TemperatureConverter();
    }
}
