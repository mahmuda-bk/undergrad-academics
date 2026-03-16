#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// Structure to represent an edge
struct Edge {
    int u;
    int v;
    int w;
};

// Compare function for sorting edges
bool compareEdges(Edge a, Edge b) {
    return a.w < b.w;
}

// Global arrays for DSU
vector<int> parent, rankArr;

// makeSet: initialize parent and rank
void makeSet(int n) {
    parent.resize(n);
    rankArr.resize(n, 0);
    for (int i = 0; i < n; i++) {
        parent[i] = i; // each node is its own parent
    }
}

// findSet with path compression
int findSet(int x) {
    if (parent[x] != x) {
        parent[x] = findSet(parent[x]);
    }
    return parent[x];
}

// unionSet by rank
void unionSet(int x, int y) {
    int rootX = findSet(x);
    int rootY = findSet(y);
    if (rootX == rootY) return;

    if (rankArr[rootX] < rankArr[rootY]) {
        parent[rootX] = rootY;
    } else if (rankArr[rootX] > rankArr[rootY]) {
        parent[rootY] = rootX;
    } else {
        parent[rootY] = rootX;
        rankArr[rootX]++;
    }
}

// Kruskal’s MST Algorithm
void kruskalMST(int n, vector<Edge> &edges) {
    // Step 1: Initialize DSU
    makeSet(n);

    // Step 2: Sort edges
    sort(edges.begin(), edges.end(), compareEdges);

    vector<Edge> mst;
    int totalWeight = 0;

    // Step 3: Iterate over edges
    for (int i = 0; i < edges.size(); i++) {
        int u = edges[i].u;
        int v = edges[i].v;
        int w = edges[i].w;

        if (findSet(u) != findSet(v)) {
            unionSet(u, v);
            mst.push_back(edges[i]);
            totalWeight += w;
        }
    }

    // Print MST
    cout << "Edges in MST:\n";
    for (auto &e : mst) {
        cout << e.u << " - " << e.v << " (weight " << e.w << ")\n";
    }
    cout << "Total weight of MST = " << totalWeight << "\n";
}

int main() {
    int n, m;
    cin >> n >> m;

    vector<Edge> edges(m);
    for (int i = 0; i < m; i++) {
        int u, v, w;
        cin >> u >> v >> w;
        edges[i] = {u, v, w};
        // For 1-based input, use: edges[i] = {u-1, v-1, w};
    }

    kruskalMST(n, edges);

    return 0;
}
