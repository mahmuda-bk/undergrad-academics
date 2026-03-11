/*
Write a C program to check if two input strings are
anagrams (contain the same characters in a different
order)
*/

#include <stdio.h>
#include <string.h>

int main()
{
    char s1[100], s2[100];
    char temp;
    int i, j;

    fgets(s1, sizeof(s1), stdin);
    if (s1[strlen(s1) - 1] == '\n')
    {

        s1[strlen(s1) - 1] = '\0';
    }

    fgets(s2, sizeof(s2), stdin);
    if (s2[strlen(s2) - 1] == '\n')
    {

        s2[strlen(s2) - 1] = '\0';

    }

    int n  = strlen(s1);
    int n1 = strlen(s2);

    if (n != n1)
    {
        printf("no\n", s1, s2);
        return 0;
    }

    for (i = 0; i < n - 1; i++)
    {
        for (j = i + 1; j < n; j++)
        {
            if (s1[i] > s1[j])
            {
                temp  = s1[i];
                s1[i] = s1[j];
                s1[j] = temp;
            }
            if (s2[i] > s2[j])
            {
                temp  = s2[i];
                s2[i] = s2[j];
                s2[j] = temp;
            }
        }
    }
    for (i = 0; i < n; i++)
    {
        if (s1[i] != s2[i])
        {
            printf("no\n");
            return 0;
        }
    }

    printf("yes\n");
    return 0;
}




