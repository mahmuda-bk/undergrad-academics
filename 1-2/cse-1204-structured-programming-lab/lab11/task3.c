/*
Write a C program to input an integer N where N
representing the number of elements in an array. Next
input N integers and store them in an array named arr.
Finally, sort the numbers such that even numbers appear
before odd numbers while maintaining their order.
*/

#include <stdio.h>

int main()
{
    int N;
    scanf("%d", &N);
    int arr[N];
    for (int i = 0; i < N; i++)
    {
        scanf("%d", &arr[i]);
    }
    for (int i = 0; i < N - 1; i++)
    {
        for (int j = 0; j < N - i - 1; j++)
        {
            if ((arr[j] % 2 > arr[j + 1] % 2) ||
                    (arr[j] % 2 == arr[j + 1] % 2 && arr[j] > arr[j + 1]))
            {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    for (int i = 0; i < N; i++)
    {
        printf("%d ", arr[i]);
    }
    printf("\n");
    return 0;
}

