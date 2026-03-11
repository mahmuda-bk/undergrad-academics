/*
Write a C program to swap the values of two variables
without using a third variable. Print the values of the
variables before and after swapping.
*/

#include <stdio.h>

int main() {
    int a, b;

    printf("a = ");
    scanf("%d", &a);
    printf("b = ");
    scanf("%d", &b);

    a = a + b;
    b = a - b;
    a = a - b;

    printf("Before swapping: a = %d, b = %d\n", b, a);
    printf("After swapping: a = %d, b = %d\n", a, b);

    return 0;
}

