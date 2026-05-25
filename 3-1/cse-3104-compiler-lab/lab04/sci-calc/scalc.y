%{
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int yylex();
void yyerror(const char *s);

double factorial(double n) {
    if (n < 0) return 0;
    int num = (int)n;
    double fact = 1.0;
    for (int i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}
%}

%union {
    double fval;
}

%token <fval> NUM
%token SIN COS TAN LOG SQRT FACT POW EXIT
%type <fval> exp

%left '+' '-'
%left '*' '/'
%right UMINUS

%%
interactive_loop:
    | interactive_loop line
    ;

line:
    '\n'       { printf("> "); }
    | EXIT '\n'  { exit(0); }
    | exp '\n'   { printf("= %g\n> ", $1); }
    | error '\n' { yyerrok; printf("\n> "); }
    ;
exp:
    NUM                  { $$ = $1; }
    | exp '+' exp        { $$ = $1 + $3; }
    | exp '-' exp        { $$ = $1 - $3; }
    | exp '*' exp        { $$ = $1 * $3; }
    | exp '/' exp        { 
                            if ($3 == 0) {
                                yyerror("Math Error: Division by zero");
                                $$ = 0;
                            } else {
                                $$ = $1 / $3; 
                            }
                         }
    | '-' exp %prec UMINUS { $$ = -$2; }
    | '(' exp ')'        { $$ = $2; }
    | SIN '(' exp ')'    { $$ = sin($3); }
    | COS '(' exp ')'    { $$ = cos($3); }
    | TAN '(' exp ')'    { $$ = tan($3); }
    | LOG '(' exp ')'    { 
                            if ($3 <= 0) {
                                yyerror("Math Error: Log domain error");
                                $$ = 0;
                            } else {
                                $$ = log($3); 
                            }
                         }
    | SQRT '(' exp ')'   { 
                            if ($3 < 0) {
                                yyerror("Math Error: Square root of negative");
                                $$ = 0;
                            } else {
                                $$ = sqrt($3); 
                            }
                         }
    | FACT '(' exp ')'   { $$ = factorial($3); }
    | POW '(' exp ',' exp ')' { $$ = pow($3, $5); } /* Fixed from $1 to $3 */
    ;
%%

int main() {
    printf("> ");
    yyparse();
    return 0;
}

void yyerror(const char *s) {
    fprintf(stderr, "Error: %s\n", s);
}
