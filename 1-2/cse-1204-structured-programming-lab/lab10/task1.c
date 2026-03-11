/*
Write a C program to count and display the unique
alphabets in a string.
*/

#include<stdio.h>
#include<string.h>
int main ()
{
    char In[100];
    int i,j,cnt=0;
    int A[26]= {0};
    fgets(In, sizeof(In), stdin);
    if (In[strlen(In) - 1] == '\n')
    {

        In[strlen(In) - 1] = '\0';
    }
    for(i=0; In[i]!='\0'; i++)
    {
        char ch = tolower(In[i]);
        if(ch>='a'&&ch<='z')
        {
            if(!A[ch- 'a'])
            {
                cnt++;
                A[ch-'a']=1;
            }
        }
    }
    printf("%d\n",cnt);
    return 0;
}
