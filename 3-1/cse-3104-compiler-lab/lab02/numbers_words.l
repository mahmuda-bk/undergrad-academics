%{
#include <stdio.h>
%}

%%
[0-9]+      { printf("NUMBER: %s\n", yytext); }
[a-zA-Z]+   { printf("WORD  : %s\n", yytext); }
.|\n        { /* ignore other characters */ }
%%

int yywrap(void) {
    return 1;   // tell Flex no more input
}

int main() {
    yylex();
    return 0;
}