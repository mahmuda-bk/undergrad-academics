%{
#include "scalc.tab.h"
#include <stdlib.h>
#include <string.h>
%}

%%
[0-9]+(\.[0-9]+)? { yylval.fval = atof(yytext); return NUM; }

"sin"       { return SIN; }
"cos"       { return COS; }
"tan"       { return TAN; }
"log"       { return LOG; }
"sqrt"      { return SQRT; }
"fact"      { return FACT; }
"pow"       { return POW; }
"exit"      { return EXIT; }
"quit"      { return EXIT; }

[-+*/()\n,] { return yytext[0]; }
[ \t]       { /* skip whitespace */ }
.           { printf("Unknown token: %s\n", yytext); }
%%

int yywrap() {
    return 1;
}
