/*
Write a program that accepts an array of integers. Then,
reverses the array in place using two pointers (one
pointing to the start and the other to the end). Prints the
reversed array.
*/

#include <stdio.h>

int main()
{
    int arr[50], n, temp;
    int *start, *end;

    scanf("%d", &n);

    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }

    start = arr;
    end = arr + n - 1;

    while (start < end)
    {
        temp = *start;
        *start = *end;
        *end = temp;
        start++;
        end--;
    }

    for (int i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }

    return 0;
}

