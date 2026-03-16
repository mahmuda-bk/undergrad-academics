#include<iostream>
#include<string>
#include<vector>

using namespace std;

#define MAX 1000

void LCSLength(string X, string Y) {
    int m = X.length();
    int n = Y.length();

    // // 2D vectors allow runtime sizes and are safer
    // vector<vector<int>> c(m + 1, vector<int>(n + 1, 0));
    // vector<vector<int>> b(m + 1, vector<int>(n + 1, 0));

    // Using static arrays
    int c[MAX][MAX], b[MAX][MAX];

    // Initialize first row and first column to 0
    for (int i = 0; i <= m; i++)
        c[i][0] = 0;
    for (int j = 0; j <= n; j++)
        c[0][j] = 0;

    // Fill c and b tables
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (X[i - 1] == Y[j - 1]) {
                c[i][j] = c[i - 1][j - 1] + 1;
                b[i][j] = 2; // diagonal
            } else if (c[i - 1][j] >= c[i][j - 1]) {
                c[i][j] = c[i - 1][j];
                b[i][j] = 0; // up
            } else {
                c[i][j] = c[i][j - 1];
                b[i][j] = 1; // left
            }
        }
    }

    cout << "Length of LCS: " << c[m][n] << endl;

    // Reconstruct LCS
    string lcs = "";
    int i = m, j = n;
    while (i > 0 && j > 0) {
        if (b[i][j] == 2) { // diagonal
            lcs = X[i - 1] + lcs;
            i--; j--;
        } else if (b[i][j] == 0) { // up
            i--;
        } else { // left
            j--;
        }
    }

    cout << "LCS: " << lcs << endl;
}

int main() {
    string X, Y;
    cout << "Enter first string: ";
    cin >> X;
    cout << "Enter second string: ";
    cin >> Y;

    LCSLength(X, Y);
    return 0;
}
