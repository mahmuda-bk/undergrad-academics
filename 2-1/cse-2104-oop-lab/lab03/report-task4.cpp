/*
Write a Program to generate Fibonacci Series by using Constructor to initialize the Data Members. 
*/
 
#include <iostream> 
using namespace std; 

class Fibonacci { 
private: 
    int n; 
    
public: 
    Fibonacci(int num) { 
        n = num; 
    } 
    int fib(int t) { 
        if (t == 0) 
            return 0; 
        else if (t == 1) 
            return 1; 
        else 
            return fib(t - 1) + fib(t - 2); 
    } 
    void printFib() { 
        cout << "Fibonacci Series up to " << n << " terms:" << endl; 
        for (int i = 0; i < n; ++i) { 
            cout << fib(i) << " "; 
        } 
        cout << endl; 
    } 
}; 

int main() { 
    int N; 
    cout << "Enter the number of terms for Fibonacci Series: ";  cin >> N; 
    Fibonacci fibObj(N); 
    fibObj.printFib(); 
    return 0; 
} 
