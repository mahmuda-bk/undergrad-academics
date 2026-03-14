#include <iostream>
using namespace std;

void merge_arr(int arr[], int left, int mid, int right)
{
    int size_left = mid - left + 1;
    int size_right = right - mid;
    int leftarr[size_left], rightarr[size_right];

    int i = 0, j = 0, k = 0;

    while (i < size_left && j < size_right)
    {
        if (leftarr[i] < rightarr[j])
        {
            arr[k] = leftarr[i];
            i++;
            k++;
        }
        else
        {
            arr[k] = rightarr[j];
            j++;
            k++;
        }
    }

    while (i < size_left)
    {
        arr[k] = leftarr[i];
        i++;
        k++;
    }

    while (j < size_right)
    {
        arr[k] = rightarr[j];
        j++;
        k++;
    }
}

void merge_sort(int arr[], int left, int right)
{
    if (left >= right)
        return;

    int mid = left + (right - left) / 2;

    merge_sort(arr, left, mid);
    merge_sort(arr, mid + 1, right);

    merge_arr(arr, left, mid, right);
}

int main()
{
    int n, i, arr[100];

    cout << "Enter array size: ";
    cin >> n;
    cout << "Enter array elements: ";
    for (i = 0; i < n; i++)
    {
        cin >> arr[i];
    }

    merge_sort(arr, 0, n - 1);

    for (i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }

    return 0;
}
