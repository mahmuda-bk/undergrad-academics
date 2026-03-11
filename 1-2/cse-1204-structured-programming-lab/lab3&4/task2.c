/*
Write a C program using switch-case statement that
takes a month number (1–12) and returns the season
(Winter, Spring, Summer, Fall) for that month. Assume
that December to February is Winter, March to May is
Spring, June to August is Summer, and September to
November is Fall.
*/

#include <stdio.h>

int main() {
    int monthNum;
    printf("Enter a number (1-12): ");
    scanf("%d",&monthNum);

    switch (monthNum)
    {
        case 12:
        case 1:
        case 2:
            printf("Winter\n");
            break;
        case 3:
        case 4:
        case 5:
            printf("Spring\n");
            break;
        case 6:
        case 7:
        case 8:
            printf("Summer\n");
            break;
        case 9:
        case 10:
        case 11:
            printf("Fall\n");
            break;
        default:
            printf("Invalid month number.\n");
            break;
    }

    return 0;
}
