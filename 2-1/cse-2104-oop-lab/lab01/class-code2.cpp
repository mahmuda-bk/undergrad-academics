/* 
Write a C++ Program to generate first n terms of Fibonacci sequence. 
*/

#include <iostream>

using namespace std;

void fib(int n) 
{ 
    int f0,f1,f,count=0; 
    f0=0; 
    f1=1; 
    while(count<n){ 
        cout<<f0<<"\t"; 
        count++; 
        f=f0+f1; 
        f0=f1; 
        f1=f; 
    } 
}

int main()
{
    int terms; 
    cout<<"Enter How many terms to be printed: "; 
    cin>>terms; 
    fib(terms); 
    return 0;
}
