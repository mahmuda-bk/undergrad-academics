#include <iostream>
#include <vector>
#include <climits>
using namespace std;

typedef pair<int, int> pii; // (weight, vertex)

// Function to extract the vertex with minimum key value
int extractMin(vector<int> &key, vector<bool> &inMST, int n) {
    int minKey = INT_MAX;
    int u = -1;

    for (int v = 0; v < n; v++) {
        if (!inMST[v] && key[v] < minKey) {
            minKey = key[v];
            u = v;
        }
    }
    return u;
}

// Prim's Algorithm
void primMST(int n, vector<vector<pii>> &adj, int root) {
    vector<int> key(n, INT_MAX);   // minimum weight to reach vertex
    vector<int> parent(n, -1);     // parent of vertex in MST
    vector<bool> inMST(n, false);  // whether vertex is already in MST

    key[root] = 0; // Start from root

    for (int i = 0; i < n - 1; i++) {
        int u = extractMin(key, inMST, n); // pick the min key vertex
        if (u == -1) break; // no more vertices

        inMST[u] = true;

        // Relax edges (u, v)
        for (pii edge : adj[u]) {
            int w = edge.first;  // edge weight
            int v = edge.second; // neighbor

            if (!inMST[v] && w < key[v]) {
                key[v] = w;
                parent[v] = u;
            }
        }
    }

    // Print MST
    cout << "Edges in MST:\n";
    int totalWeight = 0;
    for (int v = 0; v < n; v++) {
        if (parent[v] != -1) {
            cout << parent[v] << " - " << v << " (weight " << key[v] << ")\n";
            totalWeight += key[v];
        }
    }
    cout << "Total weight of MST = " << totalWeight << "\n";
}

int main() {
    int n, m;
    cin >> n >> m; // number of vertices and edges

    vector<vector<pii>> adj(n);

    // Input edges
    for (int i = 0; i < m; i++) {
        int u, v, w;
        cin >> u >> v >> w;
        adj[u].push_back({w, v});
        adj[v].push_back({w, u}); // undirected graph
    }

    int root = 0; // Start from vertex 0
    primMST(n, adj, root);

    return 0;
}
