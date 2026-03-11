/*
Write a C program that takes an integer 𝑁 as input,
representing the number of elements in an array. The
program should then read 𝑁 integers ai (where ai <20)and
store them in the array. After processing the array, the
program should identify the number that appears most
frequently. If there are multiple numbers with the same
maximum frequency, print the smallest number among
them.
*/

#include<stdio.h>

int main() {
    int N, i;
    scanf("%d", &N);

    if (N <= 0) {
        printf("Invalid Array Size\n");
    }

    int arr[N];
    int freq[20] = {0};
    for (i = 0; i < N; i++) {
        scanf("%d", &arr[i]);
        if (arr[i] < 0 || arr[i] >= 20) {
            printf("Invalid input. Enter numbers in the range 0-19.\n");
        }
        freq[arr[i]]++;
    }
    int maxFreq = 0, num = -1;
    for (i = 0; i < 20; i++) {
        if (freq[i] > maxFreq) {
            maxFreq = freq[i];
            num = i;
        } else if (freq[i] == maxFreq && i < num) {
            num = i;
        }
    }
    printf("%d %d", num, maxFreq);
    return 0;
}
