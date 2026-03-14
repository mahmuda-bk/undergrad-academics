/*
Passing a 2D Array to a Function: Write a C++ program to print a 2D array using separate function.

Hint: To pass a 2D array to a function, you can specify the number of columns in the function signature. 
The number of rows can be deduced automatically.
*/

#include <iostream>
using namespace std;

void printArray(int arr[][3], int rows) {
    cout << "Displaying Array via Function:\n";
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < 3; j++) {
            cout << "\t" << arr[i][j];
        }
        cout << endl;
    }
}

int main() {
    int myData[2][3] = {
        {10, 20, 30},
        {40, 50, 60}
    };

    printArray(myData, 2);

    return 0;
}