/*
Write a C program to input an integer N, representing
the number of elements in an array. Then input N integers
and store them in an array. Finally, print how many
positive and negative numbers are in that array.
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
        int pos=0, neg=0;
        for(i=0; i<N; i++){
            if(arr[i]>0){
                pos++;
            } else if(arr[i]==0){
                continue;
            } else {
                neg++;
            }
        }
        printf("Positive: %d\n", pos);
        printf("Negative: %d\n", neg);
    }
    return 0;
}

