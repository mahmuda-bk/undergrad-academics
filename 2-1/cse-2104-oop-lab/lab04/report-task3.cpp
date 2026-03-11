/*
Write a code in C++ to create a file that will hold the name and age of your friends. 
(Hint: In the code, the program will ask the user “How many friends do you have?” 
If the user has 5 friends, all his friends name and age will be provided by the user at runtime. 
Those values will be saved in the file. At the end, all the friends' names and ages will be shown in the output console.) 
*/
 
#include <iostream> 
#include <fstream> 
using namespace std; 

int main() { 
    int totalFriends; 
    string friendName; 
    int friendAge; 
    cout << "How many friends do you have? " << endl; 

    cin >> totalFriends; 
    cin.ignore(); 
    ofstream outFile("friends.txt"); 
    
    if (!outFile) { 
        cout << "Error opening file for writing." << endl;  
        return 1; 
    } 
    for (int i = 1; i <= totalFriends; i++) { 
        cout << "Enter the name of friend " << i << ": ";  
        getline(cin, friendName); 
        cout << "Enter the age of friend " << i << ": ";  
        cin >> friendAge; 
        cin.ignore(); 
        outFile << friendName << " " << friendAge << endl;  
    } 
    
    outFile.close(); 
    ifstream inFile("friends.txt"); 
    if (!inFile) { 
        cout << "Error opening file for reading." << endl;  
        return 1; 
    } 

    cout << "List of Friends:\n"; 
    while (inFile >> friendName >> friendAge) { 
        cout << "Name: " << friendName << ", Age: " << friendAge << endl; 
    } 
    
    inFile.close(); 
    return 0; 
} 
