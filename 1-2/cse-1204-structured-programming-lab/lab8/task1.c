/*
Write a C program to input an integer N, representing
the number of elements in an array. Then input N integers
and store them in an array named arr and copy the
elements of arr into brr in reverse order. Finally print all
the elements of arr and brr.
*/

#include <stdio.h>

int main() {
    int N;
    scanf("%d", &N);
    int arr[N], brr[N];

    for (int i = 0; i < N; i++) {
        scanf("%d", &arr[i]);
    }
    for (int i = 0; i < N; i++) {
        brr[i] = arr[N - 1 - i];
    }

    printf("arr= {");
    for (int i = 0; i < N; i++) {
        printf("%d", arr[i]);
        if (i < N - 1) printf(", ");
    }
    printf("}\n");

    printf("brr= {");
    for (int i = 0; i < N; i++) {
        printf("%d", brr[i]);
        if (i < N - 1) printf(", ");
    }
    printf("}\n");

    return 0;
}
