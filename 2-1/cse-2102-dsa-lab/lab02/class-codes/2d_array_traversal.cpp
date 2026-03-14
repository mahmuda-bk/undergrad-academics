#include <iostream>
using namespace std;

int main()
{
    int arr[2][3];
    int i, j;
    cout << "2D Array Input:\n";

    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 3; j++)
        {
            cout << "arr[" << i << "][" << j << "]=  ";
            cin >> arr[i][j];
        }
    }

    cout << "The 2-D Array is:\n";
    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 3; j++)
        {
            cout << "\t" << arr[i][j];
        }
        cout << endl;
    }

    return 0;
}
