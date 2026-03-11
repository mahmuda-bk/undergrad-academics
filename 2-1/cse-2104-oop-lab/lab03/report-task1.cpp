/*
Write a program using function overloading to find squares of numbers. 
*/

#include<iostream> 
using namespace std; 

class Square 
{ 
public: 
    int square(int x){ 
        return x*x; 
    } 
    double square (double x){ 
        return x*x; 
    } 
}; 

int main () 
{ 
    Square obj; 
    int num1; 
    cout << "Enter an integer number : "; 
    cin >> num1; 
    cout << "Square of " << num1 << " is " << obj.square(num1) << endl; 
    double num2; 
    cout <<"Enter a decimal number : "; 
    cin >> num2; 
    cout << "Square of " << num2 << " is " << obj.square(num2) << endl; 
    
    return 0; 
} 
