#include <iostream>
using namespace std;

struct node
{
    int data;
    node *left;
    node *right;
};

node *root = NULL;

void inorder_traversal(node *root)
{
    if (root != NULL)
    {
        inorder_traversal(root->left);
        cout << root->data << " ";
        inorder_traversal(root->right);
    }
}

void pre_order_traversal(node *root)
{
    if (root != NULL)
    {
        cout << root->data << " ";
        pre_order_traversal(root->left);
        pre_order_traversal(root->right);
    }
}

void post_order_traversal(node *root)
{
    if (root != NULL)
    {
        post_order_traversal(root->left);
        post_order_traversal(root->right);
        cout << root->data << " ";
    }
}

node *createNode(int value)
{
    node *newNode = new node;
    newNode->data = value;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

int main()
{
    // Create tree nodes
    root = createNode(1);
    root->left = createNode(2);
    root->right = createNode(3);
    root->left->left = createNode(4);
    root->left->right = createNode(5);

    // Perform traversals
    cout << "Inorder traversal: ";
    inorder_traversal(root);

    cout << "\nPreorder traversal: ";
    pre_order_traversal(root);

    cout << "\nPostorder traversal: ";
    post_order_traversal(root);

    return 0;
}
