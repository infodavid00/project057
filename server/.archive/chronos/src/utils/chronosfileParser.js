
"use strict";

function reportError(variableName, variables) {
   console.log([variableName, variables]);
}

//.. Due to the method at which this algorithm was written, using escape sequences
// as variable names causes the variable to not be shown.
//.. On strict parsing, two variables cannot repeat the same name, as it will cause the
// parser to throw an error.

export default function parser(content, strict) {
  if (typeof content === "string") {
    let tokens = content.split("\n");
    content = {};
    tokens = tokens.map(token => {
        if (!/^\s*$/.test(token)) {
            let variable = token.split("=").map(e => e.trim());
            if (variable.length !== 2 || /^\s*$/.test(variable[0])) variable = 0;
            return variable;
        } else return 0;
    }).filter(e => e !== 0).forEach(variable => {
        if (variable[0] in content && strict) {
            reportError(variable[0], tokens);
            process.exit(0);
        } else content[variable[0]] = variable[1];
    });
  } else content = {}
  return content;
}

/*console.log(
parser(`
KEY=VALUE
KEY=VALUE
\t=

    
`, true)
);
*/
