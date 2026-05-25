%{
#include <stdio.h>
#include <stdlib.h>

int yylex(void);
void yyerror(const char *s);
%}

%token NUMBER

%%
E  : T E1
   ;

E1 : '+' T E1
   | '-' T E1    
   | /* empty */
   ;

T  : F T1
   ;

T1 : '*' F T1
   | '/' F T1    
   | /* empty */
   ;

F  : '(' E ')'
   | NUMBER
   ;
%%

int main() {
    printf("Enter an arithmetic expression:\n");
    if (yyparse() == 0)
        printf("Expression is valid.\n");
    else
        printf("Expression is invalid.\n");
    return 0;
}

void yyerror(const char *s) {
    printf("Error: %s\n", s);
}
