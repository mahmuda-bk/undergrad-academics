/*
Write a C/C++ code that acts as a lexical analyzer to read a line of source code
and identify whether it is a comment or not (both single line and multi-line).
*/

#include <iostream>
#include <fstream>
#include <string>
#include <vector>

using namespace std;

void trimLeading(string &str)
{
    size_t start = str.find_first_not_of(" \t\r\n");
    if (start != string::npos)
    {
        str = str.substr(start);
    }
    else
    {
        str.clear(); 
    }
}

int main()
{
    ifstream file("input.txt");
    if (!file)
    {
        cerr << "Error: Could not open input.txt" << endl;
        return 1;
    }

    string line;
    bool isInsideMultiLine = false;

    cout << "Analyzing lines from input.txt:\n"
         << endl;

    while (getline(file, line))
    {
        trimLeading(line);
        if (line.empty())
            continue;

        if (isInsideMultiLine)
        {
            if (line.find("*/") != string::npos)
            {
                cout << "Line: \"" << line << "\"\n This is the end of a multi-line comment.\n"
                     << endl;
                isInsideMultiLine = false;
            }
            else
            {
                cout << "Line: \"" << line << "\"\n This is inside a multi-line comment.\n"
                     << endl;
            }
        }
        else
        {
            if (line.substr(0, 2) == "//")
            {
                cout << "Line: \"" << line << "\"\n This is a single-line comment.\n"
                     << endl;
            }
            else if (line.substr(0, 2) == "/*")
            {
                if (line.find("*/", 2) != string::npos)
                {
                    cout << "Line: \"" << line << "\"\n This is a complete multi-line comment in one line.\n"
                         << endl;
                }
                else
                {
                    cout << "Line: \"" << line << "\"\n This is the start of a multi-line comment.\n"
                         << endl;
                    isInsideMultiLine = true;
                }
            }
            else
            {
                cout << "Line: \"" << line << "\"\n This is NOT a comment.\n"
                     << endl;
            }
        }
    }

    file.close();
    return 0;
}