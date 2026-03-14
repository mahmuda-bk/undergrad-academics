#include <iostream>
using namespace std;

// Define the node structure
struct Node
{
    int data;
    Node *left;
    Node *right;
};

// Global root pointer
Node *root = nullptr;

// Function to insert a node into the BST
void insert(int data)
{
    Node *newNode = new Node;
    newNode->data = data;
    newNode->left = nullptr;
    newNode->right = nullptr;

    if (root == nullptr)
    {
        root = newNode;
        return;
    }

    Node *current = root;
    Node *parent = nullptr;

    while (current != nullptr)
    {
        parent = current;
        if (data < current->data)
            current = current->left;
        else
            current = current->right;
    }

    if (data < parent->data)
        parent->left = newNode;
    else
        parent->right = newNode;
}

// Inorder traversal
void inorderTraversal(Node *root)
{
    if (root != nullptr)
    {
        inorderTraversal(root->left);
        cout << root->data << " ";
        inorderTraversal(root->right);
    }
}

// Preorder traversal
void preorderTraversal(Node *root)
{
    if (root != nullptr)
    {
        cout << root->data << " ";
        preorderTraversal(root->left);
        preorderTraversal(root->right);
    }
}

// Postorder traversal
void postorderTraversal(Node *root)
{
    if (root != nullptr)
    {
        postorderTraversal(root->left);
        postorderTraversal(root->right);
        cout << root->data << " ";
    }
}

// Main function
int main()
{
    int array[7] = {27, 14, 35, 10, 19, 31, 42};
    for (int i = 0; i < 7; i++)
        insert(array[i]);

    cout << "Inorder traversal: ";
    inorderTraversal(root);

    cout << "\nPreorder traversal: ";
    preorderTraversal(root);

    cout << "\nPostorder traversal: ";
    postorderTraversal(root);

    return 0;
}
