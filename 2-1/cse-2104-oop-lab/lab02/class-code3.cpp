/*
C++ program to demonstrate member function. Definition outside class
*/

#include <bits/stdc++.h>
using namespace std;

class student {
public:
    string stuName;
    int id;

    // printname is not defined inside class definition
    void printname();

    // printid is defined inside class definition
    void printid() { cout << "Id is: " << id; }
};

// Definition of printname using scope resolution operator
// ::
void student::printname()
{
    cout << "name is: " << stuName;
}

int main()
{
    student obj1;
    obj1.stuName = "xyz";
    obj1.id = 15;

    // call printname()
    obj1.printname();
    cout << endl;

    // call printid()
    obj1.printid();
    return 0;
}
