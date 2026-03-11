/*
Write a C program to input an integer N, which is the
dimension of a square matrix. Finally, check whether the
matrix is magic square (sum of rows, columns, and
diagonals are the same), if not print -1 otherwise print
magic.
*/

#include <stdio.h>

int main() {
    int N, i, j, magicSum, rowSum, colSum, diagSum1, diagSum2;
    scanf("%d", &N);
    int arr[N][N];
    for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++) {
            scanf("%d", &arr[i][j]);
        }
    }
    magicSum = 0;
    for (j = 0; j < N; j++) {
        magicSum += arr[0][j];
    }
    for (i = 0; i < N; i++) {
        rowSum = 0;
        for (j = 0; j < N; j++) {
            rowSum += arr[i][j];
        }
        if (rowSum != magicSum) {
            break;
        }
    }
    for (j = 0; j < N; j++) {
        colSum = 0;
        for (i = 0; i < N; i++) {
            colSum += arr[i][j];
        }
        if (colSum != magicSum) {
            break;
        }
    }
    diagSum1 = 0;
    for (i = 0; i < N; i++) {
        diagSum1 += arr[i][i];
    }
    diagSum2 = 0;
    for (i = 0; i < N; i++) {
        diagSum2 += arr[i][N - 1 - i];
    }
    if (rowSum == magicSum && colSum == magicSum && diagSum1 == magicSum && diagSum2 == magicSum) {
        printf("magic\n");
    } else {
        printf("-1\n");
    }
    return 0;
}

