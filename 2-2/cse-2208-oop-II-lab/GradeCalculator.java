package gradecalculator;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class GradeCalculator extends JFrame implements ActionListener {
    JTable table;
    JButton calcButton;
    JLabel resultLabel;

    public GradeCalculator() {
        setTitle("Student Grade Calculator");
        setSize(400, 300);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLayout(new BorderLayout());

    
        String[] columns = {"Subject", "Marks"};
        Object[][] data = {
            {"Bangla", ""},
            {"Science", ""},
            {"English", ""},
            {"Math", ""},
            {"OOP", ""}
        };

        table = new JTable(data, columns);
        add(new JScrollPane(table), BorderLayout.CENTER);

        JPanel bottom = new JPanel();
        calcButton = new JButton("Calculate Grade");
        resultLabel = new JLabel("Average: -   Grade: -");
        bottom.add(calcButton);
        bottom.add(resultLabel);
        add(bottom, BorderLayout.SOUTH);

        calcButton.addActionListener(this);
        setVisible(true);
    }

    public void actionPerformed(ActionEvent e) {
        double total = 0;
        int count = 0;

        for (int i = 0; i < table.getRowCount(); i++) {
            try {
                double marks = Double.parseDouble(table.getValueAt(i, 1).toString());
                total += marks;
                count++;
            } catch (Exception ex) {
            }
        }

        if (count > 0) {
            double avg = total / count;
            String grade;
            if (avg >= 80) grade = "A+";
            else if (avg >= 75) grade = "A";
            else if (avg >= 60) grade = "B";
            else if (avg >= 40) grade = "C";
            else grade = "F";

            resultLabel.setText(String.format("Average: %.2f   Grade: %s", avg, grade));
        } else {
            resultLabel.setText("Enter valid marks!");
        }
    }

    public static void main(String[] args) {
        new GradeCalculator();
    }
}
