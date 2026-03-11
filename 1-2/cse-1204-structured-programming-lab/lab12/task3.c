/*
Write a C program to count the length of a string without
using library function.
*/

#include <stdio.h>

int main()
{
    char str[100];
    char *ptr;
    int length = 0;

    fgets(str, sizeof(str), stdin);
    if (str[strlen(str) - 1] == '\n')
    {
        str[strlen(str) - 1] = '\0';
    }
    ptr = str;

    while (*ptr != '\0')
    {
        length++;
        ptr++;
    }
    printf("%d\n", length);

    return 0;
}

