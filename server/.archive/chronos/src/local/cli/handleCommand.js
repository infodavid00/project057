
"use strict";

import { clean, clear } from "./clear.js";
import { env, etag, machine, mem, uptime, whoami, winc } from "./info.js";

export default function handleCommand(command) {
    const Command = command.split(" ")[0];
    const Arguments = command.split(" ").slice(1);
    switch (Command) {
        case "clean": clear(); break
        case "clear": clean(); break
        case "env": env(Arguments); break
        case "etag": etag(Arguments); break
        case "machine": machine(); break
        case "mem": mem(); break
        case "uptime": uptime(); break
        case "whoami": whoami(); break
        case "winc": winc(Arguments); break
        default: if (Command) console.log(`\n${Command}: command not found \n`); break;
    }
}
