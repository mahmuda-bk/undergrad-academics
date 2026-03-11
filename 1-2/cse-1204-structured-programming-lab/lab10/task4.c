/*
Write a C program to reverse each word in a string while
keeping the order of the words intact.
*/

#include <stdio.h>
#include <string.h>

int main()
{
    char str[1000];
    fgets(str, sizeof(str), stdin);

    int start = 0, end = 0, i;

    for (i = 0; i <= strlen(str); i++)
    {
        if (str[i] == ' ' || str[i] == '\n')
        {
            end = i - 1;
            while (start < end)
            {
                char temp = str[start];
                str[start] = str[end];
                str[end] = temp;
                start++;
                end--;
            }
            start = i + 1;
        }
    }

    printf("%s", str);
    return 0;
}

