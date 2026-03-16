#include<iostream>
#include<climits>
using namespace std;

#define MAX_NODES 100
#define INF INT_MAX

int graph[MAX_NODES][MAX_NODES];
int dist[MAX_NODES];

bool solveBellmanFord(int n, int source) {
    // Step 1: Initialize distances
    for (int i = 0; i < n; i++) {
        dist[i] = INF;
    }
    dist[source] = 0;

    // Step 2: Relax all edges |V| - 1 times
    for (int i = 1; i <= n - 1; i++) {
        for (int u = 0; u < n; u++) {
            for (int v = 0; v < n; v++) {
                if (graph[u][v] != 0 && dist[u] != INF && dist[v] > dist[u] + graph[u][v]) {
                    dist[v] = dist[u] + graph[u][v];
                }
            }
        }
    }

    // Step 3: Check for negative weight cycles
    for (int u = 0; u < n; u++) {
        for (int v = 0; v < n; v++) {
            if (graph[u][v] != 0 && dist[u] != INF && dist[v] > dist[u] + graph[u][v]) {
                return false; // Negative weight cycle found
            }
        }
    }

    return true; // No negative cycle
}

int main()
{
    int n, m;
    cout << "Enter number of vertices and edges: ";
    cin >> n >> m;

    // Initialize graph
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            graph[i][j] = 0;

    cout << "\nEnter edges u, v and weight w:\n";
    for (int i = 0; i < m; i++) {
        int u, v, w;
        cin >> u >> v >> w;
        graph[u][v] = w;
        // graph[v][u] = w; // Uncomment if undirected
    }

    int source;
    cout << "Enter the source: ";
    cin >> source;

    if (solveBellmanFord(n, source)) {
        cout << "\nVertex   Distance from Source " << source << "\n";
        for (int i = 0; i < n; i++) {
            cout << i << "   ";
            if (dist[i] == INF)
                cout << -1 << endl;
            else
                cout << dist[i] << endl;
        }
    } else {
        cout << "\nNo solution: Negative weight cycle detected.\n";
    }

    return 0;
}

