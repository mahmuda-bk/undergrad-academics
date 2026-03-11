/*
Write a C program to input two integer N and K, where
N representing the number of elements in an array and K
is the key value. Next input N integers and store them in
an array named arr. Finally print the 𝑘-th smallest element
in arr.
*/

#include <stdio.h>

int main()
{
    int N, K;
    scanf("%d %d", &N, &K);
    int arr[N];
    for (int i = 0; i < N; i++)
    {
        scanf("%d", &arr[i]);
    }
    for (int i = 0; i < N - 1; i++)
    {
        for (int j = 0; j < N - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    printf("%d\n", arr[K - 1]);
    return 0;
}

