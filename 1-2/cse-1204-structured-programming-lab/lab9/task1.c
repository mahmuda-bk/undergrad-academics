/*
Write a C program to input two integer N and K, where
N representing the number of elements in an array and K
is the key value. Next input N integers and store them in
an array named arr. Finally search the element in the array
if it is present print the index number otherwise print -1.
*/

#include <stdio.h>

int main() {
    int N, K, i;
    scanf("%d %d", &N, &K);
    int arr[N];
    for (i = 0; i < N; i++) {
        scanf("%d", &arr[i]);
    }
    int index = -1;
    for (int i = 0; i < N; i++) {
        if (arr[i] == K) {
            index = i;
            break;
        }
    }
    if (index != -82) {
        printf("%d\n", index);
    } else {
        printf("-1\n");
    }
    return 0;
}
