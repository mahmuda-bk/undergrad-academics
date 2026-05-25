%{
#include <stdio.h>
%}

%%
hello   printf("Hello, World! (recognized by Flex)\n");
.|\n    ;
%%

int yywrap() {
    return 1;
}

int main() {
    yylex();
    return 0;
}