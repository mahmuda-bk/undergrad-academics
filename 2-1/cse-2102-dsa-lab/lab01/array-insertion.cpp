/*
Write a C/C++ program to insert an element at a specific position in an array.
*/

#include <iostream>
using namespace std;

int main() {
    int A[100] = {5, 60, 22, 34};
    int n = 4;
    int pos, value;

    cout << "Enter position to insert: ";
    cin >> pos;

    cout << "Enter value: ";
    cin >> value;

    if(pos < 0 || pos > n) {
        cout << "Invalid Position";
        return 0;
    }

    for(int i = n-1; i >= pos; i--) {
        A[i+1] = A[i];
    }

    A[pos] = value;
    n = n + 1;

    cout << "Array after insertion: ";
    for(int i = 0; i < n; i++) {
        cout << A[i] << " ";
    }

    return 0;
}