/*
Implementation of basic operations on singly linked list.
Traversing (print the linked list)
Node Insertion
Node Deletion
*/

#include <stdio.h>
#include <iostream>
using namespace std;

// Define the structure of a node
struct Node {
    int data;
    struct Node* link;
};

struct Node* head;

void print(){
    struct Node* temp;
    temp = head;
    while(temp != NULL){
        cout << temp -> data << " ";
        temp = temp -> link;
    }
    cout << endl;
}

void insertVal(int value){

     struct Node* temp = (struct Node*)malloc(sizeof(struct Node));
     temp -> data = value;
     temp -> link = NULL;

     if (head == NULL){
        head = temp;
     } else {
        struct Node* t;
        t = head;
        while(t->link != NULL){
           t = t -> link;
        }
        t -> link = temp;
     }
}

void deleteVal(int position){
    if (position == 1){
            struct Node* temp;
            temp = head;
            head = head -> link;
            free(temp);
    } else{
        struct Node* temp1;
        temp1 = head;
        for(int i=1; i<=position-2 ; i++){
            temp1 = temp1->link;
        }
        struct Node* temp2;
        temp2 = temp1->link;
        temp1->link = temp2->link;
        free(temp2);

    }

}

void insertBeg(int value){
    struct Node* temp = (struct Node*)malloc(sizeof(struct Node));
    temp -> data = value;
    temp -> link = head;
    head = temp;
}


int main() {

    head = NULL;
//    head = (struct Node*)malloc(sizeof(struct Node));
//    head -> data = 11;
//
//    head -> link = (struct Node*)malloc(sizeof(struct Node));
//    head -> link -> data = 12;
//    head -> link -> link = NULL;
//    print();

    insertVal(6);
    insertVal(7);
    insertVal(8);

    print();

    deleteVal(2);
    print();


//    insertBeg(9);
//    insertBeg(99);
//    insertBeg(999);
//    print();


    return 0;
}




