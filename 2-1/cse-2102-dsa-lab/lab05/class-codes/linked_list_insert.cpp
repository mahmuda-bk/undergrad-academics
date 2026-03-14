/*
Insert element at any specific position of the singly linked list
*/

#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

Node* head = nullptr;

void insertAtPosition(int position, int value) {
    Node* newNode = new Node();
    newNode->data = value;

    if (position == 0) {
        newNode->next = head;
        head = newNode;
        return;
    }

    Node* temp = head;
    for (int i = 0; temp != nullptr && i < position - 1; i++) {
        temp = temp->next;
    }

    if (temp == nullptr) {
        cout << "Position out of bounds!" << endl;
        delete newNode; // Clean up memory
        return;
    }

    newNode->next = temp->next;
    temp->next = newNode;
}

void printList() {
    Node* temp = head;
    while (temp != nullptr) {
        cout << temp->data << " -> ";
        temp = temp->next;
    }
    cout << "NULL" << endl;
}

int main() {
    // Adding initial values
    insertAtPosition(0, 10); // List: 10
    insertAtPosition(1, 30); // List: 10 -> 30
    insertAtPosition(1, 20); // List: 10 -> 20 -> 30 (Inserted at pos 1)

    cout << "Current Linked List: " << endl;
    printList();

    return 0;
}