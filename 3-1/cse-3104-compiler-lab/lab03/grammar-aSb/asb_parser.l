%{
#include "asb_parser.tab.h"
%}

%%
a   { return 'a'; }
b   { return 'b'; }
\n  { return 0; }     /* End of input on newline */
.   { /* ignore other characters */ }
%%

int yywrap() {
    return 1;
}