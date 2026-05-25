%{
#include "rd_parse.tab.h"
%}

%%
[0-9]+      { return NUMBER; }
[+\-*/()]   { return yytext[0]; }
[ \t\n]     { ; } /* Ignore whitespace */
.           { printf("Invalid character: %s\n", yytext); }
%%

int yywrap() {
    return 1;
}
