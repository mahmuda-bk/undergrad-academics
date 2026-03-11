/*
Write a C program to input two integers M, N,
representing the number of elements in the arrays. Then
input M integers and store them in an array named arr,
and input N integers and store them in an array named
brr. Next, merge the elements of both the arrays to
another array named crr. Finally, print crr.
*/

#include <stdio.h>

int main() {
    int M, N;
    scanf("%d %d", &M, &N);

    int arr[M], brr[N], crr[M + N];
    for (int i = 0; i < M; i++) {
        scanf("%d", &arr[i]);
    }

    for (int i = 0; i < N; i++) {
        scanf("%d", &brr[i]);
    }

    for (int i = 0; i < M; i++) {
        crr[i] = arr[i];
    }
    for (int i = 0; i < N; i++) {
        crr[M + i] = brr[i];
    }

    for (int i = 0; i < M + N; i++) {
        printf("%d ", crr[i]);
    }

    return 0;
}

