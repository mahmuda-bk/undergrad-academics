%{
#include <stdio.h>
%}

%%
"+"     printf("PLUS (+) Operator\n");
"-"     printf("MINUS (-) Operator\n");
"*"     printf("MULTIPLY (*) Operator\n");
"/"     printf("DIVIDE (/) Operator\n");
.|\n    ;
%%

int yywrap() {
    return 1;
}

int main() {
    printf("Enter operators:\n");
    yylex();
    return 0;
}