/*
Write a C program to input two integer variables. Then
create a function to swap the two numbers using pointers.
Prints the numbers before and after the swap operation.
*/

#include <stdio.h>

void swap(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main()
{
    int num1, num2;
    printf("Enter two integers: ");
    scanf("%d %d", &num1, &num2);
    printf("Before swapping: %d %d\n", num1, num2);

    swap(&num1, &num2);

    printf("After swapping: %d %d\n", num1, num2);

    return 0;
}
