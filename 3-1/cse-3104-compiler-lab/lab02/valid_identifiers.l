%{
#include <stdio.h>
#include <string.h>

char *keywords[] = {"int", "float", "if", "else", "while", "for", "return", "main", "void", NULL};

int isKeyword(char *word) {
    for (int i = 0; keywords[i] != NULL; i++) {
        if (strcmp(word, keywords[i]) == 0)
            return 1;
    }
    return 0;
}
%}

%%

[_a-zA-Z][_a-zA-Z0-9]* {
                            if (isKeyword(yytext))
                                printf("%s : KEYWORD (Not a valid identifier)\n", yytext);
                            else
                                printf("%s : VALID IDENTIFIER\n", yytext);
                         }

[0-9][_a-zA-Z0-9]* { printf("%s : INVALID IDENTIFIER (Starts with digit)\n", yytext); }

.|\n                      { /* Ignore other characters */ }

%%

int yywrap() {
    return 1;
}

int main() {
    printf("Enter identifiers (Ctrl+D to stop):\n");
    yylex();
    return 0;
}