#include <iostream>
#include <vector>
#include <queue>
using namespace std;

void bfs(int start, const vector<vector<int>> &adjList, int vertices)
{
    vector<bool> visited(vertices, false);
    queue<int> q;

    visited[start] = true;
    q.push(start);

    cout << "BFS traversal starting from vertex " << start << ": ";

    while (!q.empty())
    {
        int current = q.front();
        q.pop();
        cout << current << " ";

        for (int neighbor : adjList[current])
        {
            if (!visited[neighbor])
            {
                visited[neighbor] = true;
                q.push(neighbor);
            }
        }
    }
    cout << endl;
}

int main()
{
    int vertices, edges;
    int u, v;
    bool isDirected;

    cout << "Enter number of vertices: ";
    cin >> vertices;
    cout << "Enter number of edges: ";
    cin >> edges;
    cout << "Is the graph directed? (1 for Yes, 0 for No): ";
    cin >> isDirected;

    vector<vector<int>> adjList(vertices);

    cout << "Enter edges (u v):\n";
    for (int i = 0; i < edges; ++i)
    {
        cin >> u >> v;
        if (u < 0 || v < 0 || u >= vertices || v >= vertices)
        {
            cout << "Invalid edge! Try again.\n";
            --i;
            continue;
        }
        adjList[u].push_back(v);
        if (!isDirected)
        {
            adjList[v].push_back(u);
        }
    }

    int startVertex;
    cout << "Enter the starting vertex for BFS: ";
    cin >> startVertex;

    if (startVertex >= 0 && startVertex < vertices)
    {
        bfs(startVertex, adjList, vertices);
    }
    else
    {
        cout << "Invalid starting vertex.\n";
    }

    return 0;
}
