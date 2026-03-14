#include <iostream>
using namespace std;

// Node structure
struct Node {
    int data;
    Node* left;
    Node* right;
};

// Function to create a new node
Node* createNode(int data) {
    Node* newNode = new Node;
    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

// Function to insert nodes in BST
Node* insert(Node* root, int data) {
    if (root == NULL)
        return createNode(data);

    if (data < root->data)
        root->left = insert(root->left, data);
    else
        root->right = insert(root->right, data);

    return root;
}

// Function to find the minimum value node
Node* findMin(Node* root) {
    while (root->left != NULL)
        root = root->left;
    return root;
}

// Function to delete a node from BST
Node* deleteNode(Node* root, int key) {
    if (root == NULL)
        return root;

    if (key < root->data)
        root->left = deleteNode(root->left, key);

    else if (key > root->data)
        root->right = deleteNode(root->right, key);

    else {
        // Case 1: No child
        if (root->left == NULL && root->right == NULL) {
            delete root;
            return NULL;
        }

        // Case 2: One child
        else if (root->left == NULL) {
            Node* temp = root->right;
            delete root;
            return temp;
        }

        else if (root->right == NULL) {
            Node* temp = root->left;
            delete root;
            return temp;
        }

        // Case 3: Two children
        Node* temp = findMin(root->right);
        root->data = temp->data;
        root->right = deleteNode(root->right, temp->data);
    }

    return root;
}

// Inorder traversal
void inorderTraversal(Node* root) {
    if (root != NULL) {
        inorderTraversal(root->left);
        cout << root->data << " ";
        inorderTraversal(root->right);
    }
}

int main() {
    Node* root = NULL;

    // Insert nodes
    int arr[] = {27, 14, 35, 10, 19, 31, 42};
    for (int i = 0; i < 7; i++)
        root = insert(root, arr[i]);

    cout << "Inorder before deletion: ";
    inorderTraversal(root);

    int key = 14;
    root = deleteNode(root, key);

    cout << "\nInorder after deleting " << key << ": ";
    inorderTraversal(root);

    return 0;
}