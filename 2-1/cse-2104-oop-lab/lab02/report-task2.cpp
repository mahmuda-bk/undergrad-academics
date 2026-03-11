/*
Write a C++ Program to display Names, Roll No., and grades of 3
students who have appeared in the examination. Declare the class of name, Roll No. and grade.
Create an array of class objects. Read and display the contents of the array.
*/

#include <iostream>
#include <string>
using namespace std;

class Student {
private:
    string name;
    int rollNo;
    string grade;
public:
    Student(string n, int r, string g) {
        name = n;
        rollNo = r;
        grade = g;
    }
    void displayInfo() {
        cout << "Name: " << name << endl;
        cout << "Roll No: " << rollNo << endl;
        cout << "Grade: " << grade << endl;
        cout << endl;
    }
};

int main() {
    Student students[3] = {
        Student("Shaima", 1, "A+"),
        Student("Tisha", 2, "A"),
        Student("Audity", 3, "A-")
    };

    cout << "Student Details:" << endl;

    for (int i = 0; i < 3; i++) {
        students[i].displayInfo();
    }
    return 0;
}