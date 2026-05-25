%{
#include <stdio.h>
#include <stdlib.h>

int yylex();
void yyerror(const char *s);
%}

%union {
    double fval;
}

%token <fval> NUM
%type <fval> exp

%left '+' '-'
%left '*' '/'
%right UMINUS

%%
input:
    | input line
    ;

line:
    '\n'
    | exp '\n' { printf("Result: %g\n\n", $1); }
    ;

exp:
    NUM              { $$ = $1; }
    | exp '+' exp    { $$ = $1 + $3; }
    | exp '-' exp    { $$ = $1 - $3; }
    | exp '*' exp    { $$ = $1 * $3; }
    | exp '/' exp    { 
                        if ($3 == 0) {
                            yyerror("Division by zero error");
                            $$ = 0;
                        } else {
                            $$ = $1 / $3; 
                        }
                     }
    | '-' exp %prec UMINUS { $$ = -$2; }
    | '(' exp ')'    { $$ = $2; }
    ;
%%

int main() {
    printf("Enter expression (Press Enter to evaluate):\n");
    yyparse();
    return 0;
}

void yyerror(const char *s) {
    fprintf(stderr, "Error: %s\n", s);
}