/*
Write a C++ Program to find both the largest and smallest number in a list of integers. (use array)
*/

#include <iostream>

using namespace std;

int main() 
{ 
    int a[50],i,n,small,large; 
    cout << "Enter The Array Size: "; 
    cin >> n; 
    cout << "ENTER ELEMENTS OF ARRAY: "; 
    for(i=0;i<n;i++) 
        cin >> a[i]; 
    
    small = a[0]; 
    large = a[0]; 
    
    for(i=0; i<n; i++){ 
        if(a[i]<small) small=a[i]; 
        if(a[i]>large) large=a[i];   
    } 
    
    cout << "Largest value is: "<< large << endl; 
    cout << "Smallest value is:"<< small << endl; 
    
    return 0; 
    
}
