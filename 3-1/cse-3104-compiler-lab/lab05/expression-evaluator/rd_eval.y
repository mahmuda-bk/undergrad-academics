%{
#include <stdio.h>
#include <stdlib.h>

int yylex(void);
void yyerror(const char *s);
%}

%union {
    int ival;
}

%token <ival> NUMBER
%type <ival> E T F E1 T1

%%
input:
    | input line
    ;

line:
    '\n'
    | E '\n' { printf("Expression is valid. Result = %d\n\n", $1); }
    ;

E : T E1 { $$ = $2 == -1 ? $1 : $1 + $2; }
  ;

E1 : '+' T E1 { $$ = $3 == -1 ? $2 : $2 + $3; }
   | /* empty */ { $$ = -1; }
   ;

T : F T1 { $$ = $2 == -1 ? $1 : $1 * $2; }
  ;

T1 : '*' F T1 { $$ = $3 == -1 ? $2 : $2 * $3; }
   | /* empty */ { $$ = -1; }
   ;

F : '(' E ')' { $$ = $2; }
  | NUMBER    { $$ = $1; }
  ;
%%

int main() {
    printf("Enter an arithmetic expression:\n");
    yyparse();
    return 0;
}

void yyerror(const char *s) {
    printf("Error: %s\n", s);
}