#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// Item structure to store value, weight, and value-to-weight ratio
struct Item {
    int value;
    int weight;
    double ratio; // value-to-weight ratio
};

// Function to sort the items based on the value-to-weight ratio in descending order
bool compare(Item a, Item b) {
    return a.ratio > b.ratio;
}

// Function to solve the fractional knapsack problem
double fractionalKnapsack(int W, vector<Item>& items, int n) {
    double maxValue = 0.0; // To store the maximum value in the knapsack

    // Calculate the value-to-weight ratio for each item
    for (int i = 0; i < n; i++) {
        items[i].ratio = (double)items[i].value / items[i].weight;
    }

    // Sort the items based on their value-to-weight ratio in descending order
    sort(items.begin(), items.end(), compare);

    // Loop through the items and pick them greedily
    for (int i = 0; i < n; i++) {
        if (W == 0) {
            break; // If the knapsack is full, exit the loop
        }

        // If the item can be fully included in the knapsack
        if (items[i].weight <= W) {
            W -= items[i].weight;
            maxValue += items[i].value;
        }
        // If the item can't be fully included, take the fractional part of it
        else {
            maxValue += items[i].value * ((double)W / items[i].weight);
            W = 0; // The knapsack is now full
        }
    }

    return maxValue; // Return the maximum value that can be obtained
}

int main() {
    int n, W;

    // Input the number of items and the knapsack capacity
    cout << "Enter number of items: ";
    cin >> n;
    cout << "Enter knapsack capacity: ";
    cin >> W;

    // Create a vector of items
    vector<Item> items(n);

    // Input the value and weight for each item
    cout << "Enter values and weights for each item (value weight):\n";
    for (int i = 0; i < n; i++) {
        cin >> items[i].value >> items[i].weight;
    }

    // Calculate the maximum value that can be obtained in the knapsack
    double result = fractionalKnapsack(W, items, n);

    // Output the result
    cout << "Maximum value in Knapsack = " << result << endl;

    return 0;
}
