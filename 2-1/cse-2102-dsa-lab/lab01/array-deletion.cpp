/*
Write a C/C++ program to delete an element from a given position in an array.
*/

#include <iostream>
using namespace std;

int main() {
    int A[100] = {5, 60, 22, 34};
    int n = 4;
    int pos;

    cout << "Enter position to delete: ";
    cin >> pos;

    if(pos < 0 || pos >= n) {
        cout << "Invalid Position";
        return 0;
    }

    for(int i = pos; i < n-1; i++) {
        A[i] = A[i+1];
    }

    n = n - 1;

    cout << "Array after deletion: ";
    for(int i = 0; i < n; i++) {
        cout << A[i] << " ";
    }

    return 0;
}