#include <iostream>
#include <vector>
using namespace std;

int main()
{
    int vertices, edges;
    int u, v;
    bool isDirected;

    // Input number of vertices and edges
    cout << "Enter the number of vertices: ";
    cin >> vertices;
    cout << "Enter the number of edges: ";
    cin >> edges;

    // Choose graph type
    cout << "Is the graph directed? (1 for Yes, 0 for No): ";
    cin >> isDirected;

    // Adjacency list
    vector<vector<int>> adjList(vertices);

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
        adjList[u].push_back(v);
        if (!isDirected)
        {
            adjList[v].push_back(u);
        }
    }

    // Print adjacency list
    cout << "\nAdjacency List:\n";
    for (int i = 0; i < vertices; ++i)
    {
        cout << i << ": ";
        for (int neighbor : adjList[i])
        {
            cout << neighbor << " ";
        }
        cout << endl;
    }

    return 0;
}
