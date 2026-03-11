/*
Write a C++ Program to display the following output using Overloading Output: 
Printing int: 5 
Printing float: 500.263 
Printing string: Hello C++ 
*/
 
#include <iostream> 
#include <string> 
using namespace std; 

class Print { 
public: 
    void print(int num) { 
        cout << "Printing int: " << num << endl; 
    } 
    void print(double num) { 
        cout << "Printing float: " << num << endl;  
    } 
    void print(string text) { 
        cout << "Printing string: " << text << endl;  
    } 
}; 

int main() { 
    Print obj; 
    obj.print(5); 
    obj.print(500.263); 
    obj.print("Hello C++"); 
    return 0; 
}
