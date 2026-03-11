/*
Write a C program to input two integers R, C,
representing the rows and columns of a 2D array. Next,
input R lines. Each line will have C integers. Finally, check
whether the matrix is square, if not print -1 otherwise
check the matrix is symmetric.
*/

#include <stdio.h>

int main()
{
    int R, C, i, j;
    scanf("%d %d", &R, &C);
    int arr[R][C];
    for (i = 0; i < R; i++) {
        for (j = 0; j < C; j++) {
            scanf("%d", &arr[i][j]);
        }
    }
    if (R != C) {
        printf("-1\n");
    } else {
        int flag = 0;
        for (i = 0; i < R; i++) {
            for (j = 0; j < C; j++) {
                if (arr[i][j] == arr[j][i]) {
                    flag += 1;
                }
            }
        }
        if (flag == R * C) {
            printf("symmetric\n");
        } else {
            printf("not-symmetric.\n");
        }
    }

    return 0;
}

