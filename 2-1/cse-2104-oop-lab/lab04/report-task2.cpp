/*
Write a C++ program to implement the following output using Inheritance. 
OUTPUT: 
Enter the length and breadth: 
23 
20 
Area of the rectangle is: 460 
Enter the base and height: 
2 
5 
Area of the triangle is: 5 
*/
 
#include <iostream> 
using namespace std; 

class Shape { 
public: 
    float x, y; 
    void getData() { 
        cin >> x >> y; 
    } 
}; 

class Rectangle : public Shape { 
public: 
    void Area() { 
        cout << "Area of the rectangle is: " << x * y << endl;  
} 
}; 

class Triangle : public Shape { 
public: 
    void Area() { 
        cout << "Area of the triangle is: " << 0.5 * x * y << endl; 
    } 
}; 

int main() { 
    Rectangle r; 
    Triangle t; 
    cout << "Enter the length and breadth:" << endl;  r.getData(); 
    r.Area(); 
    cout << "Enter the base and height:" << endl;  t.getData(); 
    t.Area(); 
    return 0; 
} 
