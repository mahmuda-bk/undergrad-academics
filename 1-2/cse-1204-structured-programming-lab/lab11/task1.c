/*
Write a C program to count and display the number of
occurrences of vowels, in a given sentence str.
*/

#include <stdio.h>
#include <string.h>

int main()
{
    char str[1000];
    int i, cnt = 0;
    fgets(str, sizeof(str), stdin);
    if (str[strlen(str) - 1] == '\n')
    {
        str[strlen(str) - 1] = '\0';
    }
    for (i = 0; str[i] != '\0'; i++)
    {
        if (str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U' ||
                str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
        {
            cnt++;
        }
    }
    printf("%d\n", cnt);
    return 0;
}

