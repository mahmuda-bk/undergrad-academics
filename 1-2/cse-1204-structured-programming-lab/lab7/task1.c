/*
Write a C program to input an integer N, representing
the number of elements in an array. Then input N integers
and store them in an array. Finally print the index of
largest element.
*/

#include<stdio.h>

int main()
{
    int N, i;
    scanf("%d", &N);
    if(N<=0){
        printf("Invalid Array Size\n");
    } else {
        int arr[N];
        for(i=0; i<N; i++){
            scanf("%d", &arr[i]);
        }
        int max = -100000;
        int index;
        for(i=0; i<N; i++){
            if(max < arr[i]){
                max = arr[i];
                index = i;
            }
        }
        printf("%d\n", index);
    }
    return 0;
}
