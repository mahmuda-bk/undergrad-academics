#include <iostream>
using namespace std;

int main()
{
    int m1[5][5], m2[5][5], m3[5][5];
    int i, j, r, c;

    cout << "Enter the no. of rows of the matrices:";
    cin >> r;
    cout << "Enter the no. of columns of the matrices:";
    cin >> c;

    cout << "\n1st Matrix Input:\n";
    for (i = 0; i < r; i++)
    {
        for (j = 0; j < c; j++)
        {
            cout << "matrix1[" << i << "][" << j << "]=  ";
            cin >> m1[i][j];
        }
    }

    cout << "\n2nd Matrix Input:\n";
    for (i = 0; i < r; i++)
    {
        for (j = 0; j < c; j++)
        {
            cout << "matrix2[" << i << "][" << j << "]=  ";
            cin >> m2[i][j];
        }
    }

    cout << "\nAdding Matrices...\n";

    for (i = 0; i < r; i++)
    {
        for (j = 0; j < c; j++)
        {
            m3[i][j] = m1[i][j] + m2[i][j];
        }
    }

    cout << "\nThe result Matrix is:\n";

    for (i = 0; i < r; i++)
    {
        for (j = 0; j < c; j++)
        {
            cout << "\t" << m3[i][j];
        }
        cout << endl;
    }

    return 0;
}
