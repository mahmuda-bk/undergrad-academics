/*
Insert element in the singly linked list such that the list remains sorted in ascending order.
You should not sort the list after insertion. Instead, you must insert the new element in the correct position during the insertion process.

Input Format:
First line: An integer n — the number of elements in the sorted linked list.
Second line: n space-separated integers in ascending order — the existing elements of the list.
Third line: An integer x — the new element to be inserted.

Output Format:
Print the updated linked list after inserting x in the correct position.
*/

#include <iostream>
using namespace std;

struct Node
{
    int data;
    Node *next;
};

Node *head = nullptr;

void sortedInsert(int value)
{
    Node *newNode = new Node();
    newNode->data = value;
    newNode->next = nullptr;

    if (head == nullptr || head->data >= newNode->data)
    {
        newNode->next = head;
        head = newNode;
    }
    else
    {
        Node *current = head;
        while (current->next != nullptr && current->next->data < newNode->data)
        {
            current = current->next;
        }
        newNode->next = current->next;
        current->next = newNode;
    }
}

void printList()
{
    Node *temp = head;
    while (temp != nullptr)
    {
        cout << temp->data << " ";
        temp = temp->next;
    }
    cout << endl;
}

int main()
{
    int n, val, x;

    if (!(cin >> n))
        return 0;

    for (int i = 0; i < n; i++)
    {
        cin >> val;
        sortedInsert(val);
    }

    cin >> x;
    sortedInsert(x);

    printList();

    return 0;
}