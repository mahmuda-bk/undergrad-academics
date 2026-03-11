/*
Given the time of the day, determine what part of the day
it is. The separation is as follows:
00:00 to 05:59 – Night
06:00 to 11:59– Morning
12:00 to 17:59 – Afternoon
18:00 to 23:59 – Evening

Write a C program to input two integers, H and M,
representing Hour and Minute print the part of the day.
*/

#include <stdio.h>

int main()
{
    int H, M;
    scanf("%d %d", &H, &M);

    if (H >= 0 && H <= 5) {
        printf("Night\n");
    } else if (H >= 6 && H <= 11) {
        printf("Morning\n");
    } else if (H >= 12 && H <= 17) {
        printf("Afternoon\n");
    } else if (H >= 18 && H <= 23) {
        printf("Evening\n");
    } else {
        printf("Invalid\n");
    }
    return 0;
}
