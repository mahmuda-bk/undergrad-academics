%{
#include <stdio.h>
%}

%%
[0-9]+"."[0-9]+    printf("%s is a floating number\n", yytext);
[0-9]+             printf("%s is NOT a floating number (Integer)\n", yytext);
.|\n               ;
%%

int yywrap() {
    return 1;
}

int main() {
    printf("Enter numbers:\n");
    yylex();
    return 0;
}