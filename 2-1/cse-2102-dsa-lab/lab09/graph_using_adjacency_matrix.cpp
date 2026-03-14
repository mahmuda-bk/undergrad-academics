#include <iostream>
using namespace std;

const int MAX = 100; // Maximum number of vertices

int main()
{
    int adj[MAX][MAX]; // Adjacency matrix
    int vertices, edges;
    int u, v;
    bool isDirected;

    // Initialize adjacency matrix with 0
    for (int i = 0; i < MAX; ++i)
        for (int j = 0; j < MAX; ++j)
            adj[i][j] = 0;

    // Input number of vertices and edges
    cout << "Enter the number of vertices: ";
    cin >> vertices;
    cout << "Enter the number of edges: ";
    cin >> edges;

    // Choose graph type
    cout << "Is the graph directed? (1 for Yes, 0 for No): ";
    cin >> isDirected;

    cout << "Enter edges (u v):" << endl;
    for (int i = 0; i < edges; ++i)
    {
        cin >> u >> v;
        if (u >= vertices || v >= vertices || u < 0 || v < 0)
        {
            cout << "Invalid edge! Vertex out of bounds." << endl;
            --i; // repeat this iteration
            continue;
        }
        adj[u][v] = 1;
        if (!isDirected)
        {
            adj[v][u] = 1;
        }
    }

    // Print adjacency matrix
    cout << "\nAdjacency Matrix:\n";
    for (int i = 0; i < vertices; ++i)
    {
        for (int j = 0; j < vertices; ++j)
        {
            cout << adj[i][j] << " ";
        }
        cout << endl;
    }

    return 0;
}
