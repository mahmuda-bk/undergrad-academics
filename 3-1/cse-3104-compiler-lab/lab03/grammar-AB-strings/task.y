%{
#include <stdio.h>
#include <stdlib.h>
int yylex();
void yyerror(const char *s);
%}

%%
S : 'a' S
  | 'b' S
  | /* empty */
  ;
%%

int main() {
    printf("Enter a string of a's and b's:\n");
    if (yyparse() == 0)
        printf("String is valid and belongs to the grammar.\n");
    else
        printf("String is invalid.\n");
    return 0;
}

void yyerror(const char *s) {
    fprintf(stderr, "Error: %s\n", s);
}