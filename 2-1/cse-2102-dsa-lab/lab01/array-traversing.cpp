/*
Write a C/C++ program to traverse a given array Arr = [5, 60, 22, 34] and
print its elements.
*/

#include <iostream>
using namespace std;

int main() {
    int A[] = {5, 60, 22, 34};
    int n = 4;

    cout << "Array elements are: ";

    for(int i = 0; i < n; i++) {
        cout << A[i] << " ";
    }

    return 0;
}