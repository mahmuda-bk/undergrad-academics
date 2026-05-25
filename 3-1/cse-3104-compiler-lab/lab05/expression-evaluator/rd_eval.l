%{
#include "rd_eval.tab.h"
#include <stdlib.h>
%}

%%
[0-9]+      { yylval.ival = atoi(yytext); return NUMBER; }
[+\-*/()]   { return yytext[0]; }
\n          { return '\n'; }
[ \t]       { ; } /* Ignore whitespace */
.           { printf("Invalid character: %s\n", yytext); }
%%

int yywrap() {
    return 1;
}