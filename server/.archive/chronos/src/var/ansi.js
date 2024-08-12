
"use strict";

import { SYSTEM } from "./system.js";

const esc = "\x1b[";

export default function ANSI() {
 const supportsAnsiCodes = SYSTEM.supportsAnsiCodes();
 return {
    black: supportsAnsiCodes ? esc + "30m" : "",
    blackBg: supportsAnsiCodes ? esc + "40m" : "",
    blink: supportsAnsiCodes ? esc + "5m" : "",
    bold: supportsAnsiCodes ? esc + "1m" : "",
    boldDim: supportsAnsiCodes ? esc + "1;2m" : "",
    clearScrenBuffer: supportsAnsiCodes ? esc + "2J" : "",
    clearScrollBackBuffer: supportsAnsiCodes ? esc + "3J" : "",
    dim: supportsAnsiCodes ? esc + "2m" : "",
    esc: supportsAnsiCodes ? esc : "",
    green: supportsAnsiCodes ? esc + "32m" : "",
    greenBright: supportsAnsiCodes ? esc + "92m" : "",
    moveCursorToStart: supportsAnsiCodes ? esc + "1;1H" : "",
    reset: supportsAnsiCodes ? esc + "0m" : "",
    supportsAnsiCodes,
    underlined: supportsAnsiCodes ? esc + "4m" : "",
    white: supportsAnsiCodes ? esc + "37m" : "",
    whiteBg: supportsAnsiCodes ? esc + "47m" : "",
    whiteBright: supportsAnsiCodes ? esc + "97m" : "",
    whiteBrightBg: supportsAnsiCodes ? esc + "107m" : ""
  };
}
