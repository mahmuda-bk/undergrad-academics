/*
Write a C++ program to implement the following output using constructor and destructor. 
OUTPUT: 
Constructor Invoked 
Constructor Invoked 
Destructor Invoked 
Destructor Invoked 
*/

#include<iostream> 
using namespace std; 

class MyClass { 
public: 
    MyClass() { 
        cout << "Constructor Invoked" << endl; 
    } 
    ~MyClass() { 
        cout << "Destructor Invoked" << endl; 
    } 
}; 

int main() { 
    MyClass object1; 
    MyClass object2; 
    return 0; 
} 
