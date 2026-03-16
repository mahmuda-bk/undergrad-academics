#include <iostream>
#include <climits>
using namespace std;

// Function to extract the vertex with minimum key value
int extractMin(int key[], bool inMST[], int n) {
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

// Prim's Algorithm using adjacency matrix (2D array)
void primMST(int n, int graph[100][100], int root) {
    int key[100];     // minimum weight to reach vertex
    int parent[100];  // parent of vertex in MST
    bool inMST[100];  // whether vertex is already in MST

    for (int i = 0; i < n; i++) {
        key[i] = INT_MAX;
        parent[i] = -1;
        inMST[i] = false;
    }

    key[root] = 0; // Start from root

    for (int i = 0; i < n - 1; i++) {
        int u = extractMin(key, inMST, n); // pick the min key vertex
        if (u == -1) break; // no more vertices

        inMST[u] = true;

        // Relax edges (u, v)
        for (int v = 0; v < n; v++) {
            int w = graph[u][v]; // weight of edge (u, v)
            if (w != 0 && !inMST[v] && w < key[v]) {
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

    int graph[100][100]; // fixed-size adjacency matrix (100 max vertices)

    // Initialize with 0 (no edge)
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            graph[i][j] = 0;
        }
    }

    // Input edges
    for (int i = 0; i < m; i++) {
        int u, v, w;
        cin >> u >> v >> w;
        graph[u][v] = w;
        graph[v][u] = w; // undirected graph
    }

    int root = 0; // Start from vertex 0
    primMST(n, graph, root);

    return 0;
}
