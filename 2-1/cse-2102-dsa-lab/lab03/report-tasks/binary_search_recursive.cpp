#include <iostream>
using namespace std;

int binarySearchRecursive(int arr[], int low, int high, int target)
{
    if (low <= high)
    {
        int mid = low + (high - low) / 2;

        if (arr[mid] == target)
            return mid;

        if (target < arr[mid])
            return binarySearchRecursive(arr, low, mid - 1, target);

        return binarySearchRecursive(arr, mid + 1, high, target);
    }

    return -1;
}

int main()
{
    int data[] = {12, 23, 34, 45, 56, 67, 78, 89};
    int n = sizeof(data) / sizeof(data[0]);
    int target = 56;

    int result = binarySearchRecursive(data, 0, n - 1, target);

    if (result != -1)
        cout << "Element found at index: " << result << endl;
    else
        cout << "Element not found in the array." << endl;

    return 0;
}