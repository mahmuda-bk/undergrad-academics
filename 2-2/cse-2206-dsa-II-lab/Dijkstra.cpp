#include <iostream>
#include <climits>

using namespace std;

#define MAX_NODES 100
#define INF INT_MAX

int graph[MAX_NODES][MAX_NODES]; // Adjacency matrix
int dist[MAX_NODES];             // Distance array
bool visited[MAX_NODES];         // Visited nodes

// Function to find the vertex with the minimum distance
int extractMin(int n) {
    int minDist = INF, minIndex = -1;
    for (int i = 0; i < n; i++) {
        if (!visited[i] && dist[i] < minDist) {
            minDist = dist[i];
            minIndex = i;
        }
    }
    return minIndex;
}

// Dijkstra’s Algorithm
void dijkstra(int n, int source) {
    for (int i = 0; i < n; i++) {
        dist[i] = INF;
        visited[i] = false;
    }

    dist[source] = 0;

    for (int count = 0; count < n - 1; count++) {
        int u = extractMin(n);
        if (u == -1) break; // No more reachable nodes

        visited[u] = true;

        for (int v = 0; v < n; v++) {
            if (!visited[v] && graph[u][v] && dist[u] != INF &&
                dist[v] > dist[u] + graph[u][v]) {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }

    // Print shortest distances
    cout << "Vertex   Distance from Source " << source << "\n";


    for (int i = 0; i < n; i++) {
            if (dist[i] == INF) {
                   cout<<-1;
            } else {
                cout << i << "\t\t" << dist[i] << "\n";
    }

    }
}

int main() {
    int n, m;
    cout << "Enter number of vertices and edges: ";
    cin >> n >> m;

    // Initialize graph with 0 (no edge)
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            graph[i][j] = 0;

    cout << "Enter edges (u v w):\n";
    for (int i = 0; i < m; i++) {
        int u, v, w;
        cin >> u >> v >> w;
        graph[u][v] = w;
        graph[v][u] = w; // Remove for directed graph
    }

    int source;
    cout << "Enter source vertex: ";
    cin >> source;

    dijkstra(n, source);

    return 0;
}

