/*
Write a program in C++ that will contain two classes (A and B).
Create two setter function for setting the values in these two classes.
Create a friend function named max that will be friend of these two classes.
This Max Function will calculate the maximum number and show this number as an output.
*/

#include <iostream>
using namespace std;
class B;
class A
{
private:
    int numA;

public:
    void setValue(int value)
    {
        numA = value;
    }
    friend void max(A, B);
};

class B
{
private:
    int numB;

public:
    void setValue(int value)
    {
        numB = value;
    }
    friend void max(A, B);
};
void max(A objA, B objB)
{
    if (objA.numA > objB.numB)
    {
        cout << "Maximum value is: " << objA.numA << endl;
    }
    else if (objB.numB > objA.numA)
    {
        cout << "Maximum value is: " << objB.numB << endl;
    }
    else
    {
        cout << "Both values are equal: " << objA.numA << endl;
    }
}
int main()
{
    A objA;
    B objB;
    int aValue, bValue;
    cout << "Enter value for class A: ";
    cin >> aValue;
    objA.setValue(aValue);

    cout << "Enter value for class B: ";
    cin >> bValue;
    objB.setValue(bValue);
    max(objA, objB);
    return 0;
}
