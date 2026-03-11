/*
Write a program to print the consonents of a sentence
using pointer.
*/

#include <stdio.h>

int main()
{
    char sen[1000];
    char *ptr;
    fgets(sen, sizeof(sen), stdin);
    if (sen[strlen(sen) - 1] == '\n')
    {
        sen[strlen(sen) - 1] = '\0';
    }
    ptr = sen;
    while (*ptr != '\0')
    {
        char c = *ptr;
        if (c >= 'A' && c <= 'Z')
        {
            c = c + ('a' - 'A');
        }
        if ((c == ' ' || c >= 'a' && c <= 'z') && !(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'))
        {
            printf("%c", *ptr);
        }
        ptr++;
    }
    printf("\n");
    return 0;
}

