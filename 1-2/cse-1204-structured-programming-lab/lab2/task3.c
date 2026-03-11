/*
Write a C program to input two integers and perform the
following arithmetic operations: addition, subtraction,
multiplication, division, and modulus. Display the result of
each operation.
*/

#include <stdio.h>

int main() {
    int num1, num2;

    scanf("%d %d", &num1, &num2);

    printf("Addition: %d\n", num1 + num2);
    printf("Subtraction: %d\n", num1 - num2);
    printf("Multiplication: %d\n", num1 * num2);
    printf("Division: %d\n", num1 / num2);
    printf("Modulus: %d\n", num1 % num2);

    return 0;
}
