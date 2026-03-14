#include <iostream>
using namespace std;

int main()
{
    int n;
    cout << "Enter the size of the square matrix (N): ";
    cin >> n;

    int matrix[n][n];

    cout << "Enter elements for the matrix:\n";
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cout << "Element [" << i << "][" << j << "]: ";
            cin >> matrix[i][j];
        }
    }

    cout << "\nOriginal Matrix:\n";
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cout << "\t" << matrix[i][j];
        }
        cout << endl;
    }

    cout << "\nTransposed Matrix:\n";
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cout << "\t" << matrix[j][i];
        }
        cout << endl;
    }

    return 0;
}