/*
Write a C++ program to generate all the prime numbers between 1 and n,
where n is a value supplied by the user.
*/

#include <iostream>

using namespace std;

int main() {
    int n;
    cout << "Enter the value of n: ";
    cin >> n;

    if (n < 2) {
    cout << "No prime numbers available." << endl;
    return 0;
    }

    bool isPrime[n + 1];

    for (int i = 0; i <= n; i++) {
        isPrime[i] = true;
    }

    isPrime[0] = isPrime[1] = false;

    for (int i = 2; i * i <= n; ++i) {
        if (isPrime[i]) {
            for (int j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    cout << "Prime numbers between 1 and " << n << ": ";

    for (int i = 2; i <= n; ++i) {
        if (isPrime[i]) {
        cout << i << "\t";
        }
    }

    cout << endl;
    
    return 0;
}