/*
Given an odd integer N, print a rectangle in the following
format, if N=9
*/

#include <stdio.h>

int main() {
    int N;
    printf("Enter an odd integer N: ");
    scanf("%d", &N);

    if (N % 2 == 0) {
        printf("N must be an odd number.\n");
        return 1;
    }

    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            if (i == 0 || i == N - 1 || j == 0 || j == N - 1) {
                printf("@");
            } else {
                printf(" ");
            }
        }
        printf("\n");
    }

    return 0;
}
