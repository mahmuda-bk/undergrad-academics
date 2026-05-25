/*
Write a C/C++ program to construct a Symbol Table for a given source program.
Source program:
int a;
float b;
double c;
float a;

Expected Output:
Symbol Table
---------------------------
Name	Type
a	    int
b	    float
c	    double
*/

#include <iostream>
#include <fstream>
#include <map>
#include <vector>
using namespace std;

int main()
{
    ifstream file("input.txt");
    if (!file)
    {
        cout << "Cannot open file!\n";
        return 1;
    }

    map<string, string> symTab;
    vector<string> dup;
    string type, name;

    while (file >> type >> name)
    {
        if (name.back() == ';')
        {
            name.pop_back();
        }
        if (symTab.find(name) != symTab.end())
        {
            dup.push_back(name);
        }
        else
        {
            symTab[name] = type;
        }
    }

    file.close();
    cout << "\nSymbol Table\n";
    cout << "---------------------------\n";
    cout << "Name\tType\n";

    for (auto it : symTab)
    {
        cout << it.first << "\t" << it.second << endl;
    }

    if (!dup.empty())
    {
        cout << "\nDuplicate Declarations:\n";
        for (string i : dup)
        {
            cout << i << endl;
        }
    }

    return 0;
}
