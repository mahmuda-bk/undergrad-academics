/*
Write a C program that takes an integer 𝑁 as input, Then
print the frequency of its digits
*/

#include <stdio.h>

int main() {
    int freq[10] = {0};
    int num;
    scanf("%d", &num);

    while (num != 0) {
        int digit = num % 10;
        freq[digit]++;
        num /= 10;
    }

    for (int i = 0; i < 10; i++) {
        printf("%d ", freq[i]);
    }
    printf("\n");

    return 0;
}
