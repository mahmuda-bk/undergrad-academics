/*
Write a C program to input two integers R, C,
representing the rows and columns of a 2D array. Next,
input R lines. Each line will have C integers. Finally,
compute and print the sum of each rows.
*/

#include <stdio.h>

int main() {
    int R, C;
    scanf("%d %d", &R, &C);
    int arr[R][C];

    for (int i = 0; i < R; i++) {
        for (int j = 0; j < C; j++) {
            scanf("%d", &arr[i][j]);
        }
    }

    for (int i = 0; i < R; i++) {
        int Sum = 0;
        for (int j = 0; j < C; j++) {
            Sum += arr[i][j];
        }
        printf("%d\n", Sum);
    }

    return 0;
}

