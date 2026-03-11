/*
Write a C program to input an integer N, representing
the number of elements in an array. Then input N integers
and store them in an array. Finally print the second largest
number.
*/

#include <stdio.h>

int main() {
    int N, i, cnt=0;
    scanf("%d", &N);
    int arr[N];
    for (i = 0; i < N; i++) {
        scanf("%d", &arr[i]);
    }
    int largest1 = -100000;
    for (i = 0; i < N; i++) {
        if (arr[i] > largest1) {
            largest1 = arr[i];
        }
    }
    for (i = 0; i < N; i++) {
        if (arr[i] == largest1) {
            cnt++;
        }
    }
    int largest2 = -100000;
    if (cnt > 1) {
        largest2 = largest1;
    } else {
        for (i = 0; i < N; i++) {
            if (arr[i] > largest2 && arr[i] < largest1) {
                largest2 = arr[i];
            }
        }
    }
    printf("%d\n", largest2);
    return 0;
}
