/*
Write a C program and declare two variables x and y.
Print the multiplication value of x and y.
*/

#include<stdio.h>

int main()
{
    int x,y;

    x = 2, y = 5;
    printf("Test Case #1:\n    x = %d  y = %d  x * y = %d\n", x, y, x*y);

    x = 3, y = 9;
    printf("Test Case #2:\n    x = %d  y = %d  x * y = %d\n", x, y, x*y);

    x = 10, y = 15;
    printf("Test Case #3:\n    x = %d  y = %d  x * y = %d\n", x, y, x*y);
    return 0;
}
