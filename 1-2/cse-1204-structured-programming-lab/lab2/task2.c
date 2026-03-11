/*Write a C program that will prompt you to input the height 
(int) and width(float) of a rectangle and print its area.
*/

#include <stdio.h>

int main()
{
    int height;
    float width, area;

    printf("Enter Height: ");
    scanf("%d", &height);

    printf("Enter Width: ");
    scanf("%f", &width);

    area = height * width;

    printf("Rectangle Area = %.1f\n", area);

    return 0;
}
