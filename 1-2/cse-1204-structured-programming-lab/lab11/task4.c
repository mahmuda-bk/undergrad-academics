/*
Write a program to count the number of occurrences of a
character in a given string using binary search. The input
string will always be in descendingly sorted order.
*/

#include <stdio.h>
#include <string.h>

int main()
{
    char str[100], ch;
    scanf("%s", str);
    getchar();
    scanf("%c", &ch);
    int len = strlen(str);
    int first = -1, last = -1;

    int low = 0, high = len - 1;
    while (low <= high)
    {
        int mid = low + (high - low) / 2;
        if (str[mid] == ch)
        {
            first = mid;
            high = mid - 1;
        }
        else if (str[mid] < ch)
        {
            high = mid - 1;
        }
        else
        {
            low = mid + 1;
        }
    }

    if (first == -1)
    {
        printf("0\n");
        return 0;
    }

    low = 0, high = len - 1;
    while (low <= high)
    {
        int mid = low + (high - low) / 2;
        if (str[mid] == ch)
        {
            last = mid;
            low = mid + 1;
        }
        else if (str[mid] < ch)
        {
            high = mid - 1;
        }
        else
        {
            low = mid + 1;
        }
    }

    int count = last - first + 1;
    printf("%d\n", count);

    return 0;
}

