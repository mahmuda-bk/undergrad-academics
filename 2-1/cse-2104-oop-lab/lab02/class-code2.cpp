/*
C++ program to demonstrate accessing of data members
*/

#include <bits/stdc++.h>
using namespace std;

class Student{
private:
    string stuName;
    // Access specifier
public:
    // Member Functions()
    void setName(string name) { stuName = name; }

    void printname() { cout << "Student name is:" << stuName; }
};
int main()
{
    Student obj1;
    // accessing data member
    obj1.setName("Abhi");
    // accessing member function
    obj1.printname();
    return 0;
}
