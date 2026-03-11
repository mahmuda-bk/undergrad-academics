/*
Create a class “Vehicle‟ having appropriate fields and methods. Create
two different objects of Vehicle and show the use of the methods and fields.
Hints:
Members:
Data Member: color, seat number, registration number
Member Function: Car, Bus
*/

#include <iostream>
#include <string>

using namespace std;

class Vehicle {
    string color;
    int seatNo;
    string regNo;

public:
    Vehicle(string c, int s, string r) {
        color = c;
        seatNo = s;
        regNo = r;
    }

    void displayInfo() {
        cout << "Color: " << color << "\n";
        cout << "Seats: " << seatNo << "\n";
        cout << "Registration No: " << regNo << endl;
    }
};

int main() {
    Vehicle car("Black", 5, "CAR5641");
    cout << "Car Details:" << endl;
    car.displayInfo();
    cout << endl;

    Vehicle bus("Blue", 40, "BUS7809");
    cout << "Bus Details:" << endl;
    bus.displayInfo();
    
    return 0;
}