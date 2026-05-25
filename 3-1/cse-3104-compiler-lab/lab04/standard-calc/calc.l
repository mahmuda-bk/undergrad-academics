%{
#include "calc.tab.h"
#include <stdlib.h>
%}

%%
[0-9]+(\.[0-9]+)? { yylval.fval = atof(yytext); return NUM; }
[-+*/()\n]        { return yytext[0]; }
[ \t]             { /* skip whitespace */ }
.                 { printf("Unknown character: %s\n", yytext); }
%%

int yywrap() {
    return 1;
}