/*
Write a C program to input an even integer N,
representing the number of elements in an array. Then
input N integers and store them in an array. Finally, using
swap operation swap every alternative elements and print
all the elements.
*/

#include<stdio.h>

int main()
{
    int N, i;
    scanf("%d", &N);
    if(N<=0){
        printf("Invalid Array Size\n");
    } else {
        if(N%2 !=0){
            printf("%d is an odd number.\n", N);
        } else {
        int arr[N];
        for(i=0; i<N; i++){
            scanf("%d", &arr[i]);
        }
        int temp;
        for(i=0; i<N; i+=2){
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
        for(i=0; i<N; i++){
            printf("%d ", arr[i]);
        }
    } }
    return 0;
}

