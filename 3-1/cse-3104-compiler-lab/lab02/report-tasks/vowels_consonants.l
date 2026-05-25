%{
#include <stdio.h>
int vowels = 0;
int consonants = 0;
%}

%%
[aeiouAEIOU]                      vowels++;
[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z]  consonants++;
.|\n                              ;
%%

int yywrap() {
    return 1;
}

int main() {
    printf("Enter a string:\n");
    yylex();
    printf("\nTotal Vowels : %d\n", vowels);
    printf("Total Consonants : %d\n", consonants);
    return 0;
}