#include <iostream>
#include <vector>
using namespace std;

// Function to solve the 0-1 Knapsack problem and return the DP table
vector<vector<int>> knapsack(int W, vector<int>& values, vector<int>& weights, int n) {
    // Create a 2D table to store the maximum value at each n and w
    vector<vector<int>> P(n + 1, vector<int>(W + 1, 0));

    // Fill the table using dynamic programming
    for (int i = 1; i <= n; i++) {
        for (int w = 1; w <= W; w++) {
            if (weights[i - 1] <= w) {
                // If the item can be part of the solution
                P[i][w] = max(P[i - 1][w], values[i - 1] + P[i - 1][w - weights[i - 1]]);
            } else {
                // If the item cannot be part of the solution
                P[i][w] = P[i - 1][w];
            }
        }
    }

    // Return the DP table
    return P;
}

// Function to find which items are included in the knapsack
void findItems(int W, vector<int>& values, vector<int>& weights, int n, vector<vector<int>>& P) {
    int w = W;
    cout << "Items included in the knapsack:\n";
    for (int i = n; i > 0; i--) {
        if (P[i][w] != P[i - 1][w]) { // Item i is included
            cout << "Item " << i << " (Value: " << values[i - 1] << ", Weight: " << weights[i - 1] << ")\n";
            w -= weights[i - 1]; // Reduce the remaining weight
        }
    }
}

int main() {
    int n, W;

    // Input number of items and the knapsack capacity
    cout << "Enter number of items: ";
    cin >> n;
    cout << "Enter knapsack capacity: ";
    cin >> W;

    vector<int> values(n), weights(n);

    // Input values and weights of the items
    cout << "Enter values and weights for each item (value weight):\n";
    for (int i = 0; i < n; i++) {
        cin >> values[i] >> weights[i];
    }

    // Call the knapsack function to get the DP table
    vector<vector<int>> P = knapsack(W, values, weights, n);

    // The maximum value is stored at P[n][W]
    cout << "Maximum value in the knapsack = " << P[n][W] << endl;

    // Find which items are included in the optimal solution using the DP table
    findItems(W, values, weights, n, P);

    return 0;
}
