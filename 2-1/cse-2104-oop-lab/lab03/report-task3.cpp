/*
Write a program to invoke derived class member through base class pointer. 
*/
 
#include <iostream> 
using namespace std; 

class Base { 
public: 
    virtual void display() { 
        cout << "This is Base class display function." << endl;  
    } 
}; 

class Derived : public Base { 
public: 
    void display() { 
        cout << "This is Derived class display function." << endl; 
    } 
}; 

int main() { 
    Base* basePtr; 
    Derived d; 
    basePtr = &d; 
    basePtr->display(); 
    return 0; 
} 
