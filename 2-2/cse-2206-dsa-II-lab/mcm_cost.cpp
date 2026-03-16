#include <iostream>
#include <climits>

using namespace std;

// Function to print optimal parenthesis
void printOptimalParens(int s[][10], int i, int j) {
    if (i == j) {
        cout << "A" << i + 1; // matrix numbering from A1
    } else {
        cout << "(";
        printOptimalParens(s, i, s[i][j]);
        printOptimalParens(s, s[i][j] + 1, j);
        cout << ")";
    }
}

int main() {
    int n;
    cout << "Enter number of matrices: ";
    cin >> n;

    int d[n + 1];
    cout << "Enter dimensions (" << n + 1 << " numbers): ";
    for (int i = 0; i <= n; i++)
        cin >> d[i];

    int m[10][10]; // Min multiplication cost
    int s[10][10]; // Split positions

    // Initialize diagonal to 0
    for (int i = 0; i < n; i++)
        m[i][i] = 0;

    // Compute minimum multiplication cost
    for (int len = 2; len <= n; len++) {  // chain length
        for (int i = 0; i <= n - len; i++) {
            int j = i + len - 1;
            m[i][j] = INT_MAX;

            for (int k = i; k < j; k++) {
                int q = m[i][k] + m[k + 1][j] + d[i] * d[k + 1] * d[j + 1];
                if (q < m[i][j]) {
                    m[i][j] = q;
                    s[i][j] = k;
                }
            }
        }
    }

    cout << "Minimum number of multiplications: " << m[0][n-1] << endl;

    cout << "Optimal parenthesis: ";
    printOptimalParens(s, 0, n - 1);
    cout << endl;

    return 0;
}
