
package todolist;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class TodoList extends JFrame implements ActionListener {
    DefaultListModel<String> listModel;
    JList<String> taskList;
    JTextField taskField;
    JButton addButton, deleteButton;

    public TodoList() {
        setTitle("To-Do List");
        setSize(300, 400);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLayout(new BorderLayout());

        JPanel topPanel = new JPanel();
        taskField = new JTextField(15);
        addButton = new JButton("Add");
        deleteButton = new JButton("Delete");

        addButton.addActionListener(this);
        deleteButton.addActionListener(this);

        topPanel.add(taskField);
        topPanel.add(addButton);
        topPanel.add(deleteButton);
        add(topPanel, BorderLayout.NORTH);

        listModel = new DefaultListModel<>();
        taskList = new JList<>(listModel);
        add(new JScrollPane(taskList), BorderLayout.CENTER);

        setVisible(true);
    }

    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == addButton) {
            String task = taskField.getText();
            if (!task.isEmpty()) {
                listModel.addElement(task);
                taskField.setText("");
            }
        } else if (e.getSource() == deleteButton) {
            int selectedIndex = taskList.getSelectedIndex();
            if (selectedIndex != -1) {
                listModel.remove(selectedIndex);
            }
        }
    }

    public static void main(String[] args) {
        new TodoList();
    }
}
