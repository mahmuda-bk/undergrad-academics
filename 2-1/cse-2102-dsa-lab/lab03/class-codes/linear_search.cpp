#include <iostream>
using namespace std;

// Function to perform Linear Search
int linearSearch(int arr[], int size, int target) {
    for(int i = 0; i < size; i++) {
        if(arr[i] == target)
            return i; // Target found at index i
    }
    return -1; // Target not found
}

int main() {
    int data[] = {34, 78, 12, 56, 89, 23};
    int size = sizeof(data)/sizeof(data[0]);
    int target = 56;
    int result = linearSearch(data, size, target);
    if(result != -1)
        cout << "Element found at index " << result << endl;
    else
        cout << "Element not found in the array." << endl;
    return 0;
}

