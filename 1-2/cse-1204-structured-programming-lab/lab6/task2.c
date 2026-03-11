/*
Write a C program that takes an integer an outputs
whether it is a prime or not prime.
*/

#include <stdio.h>

int main() {
    int n, cnt=0;
    scanf("%d", &n);

    if (n <= 1){
        cnt++;
    } else {
        for(int i = 2; i < n; i++) {
            if (n % i == 0) {
                cnt++;
                break;
            }
        }
    }

    if (cnt == 0) {
        printf("prime\n");
    } else {
        printf("not prime\n");
    }

    return 0;
}

