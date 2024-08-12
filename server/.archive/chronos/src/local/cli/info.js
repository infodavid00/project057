
"use strict";

import ANSI from "../../var/ansi.js";
import { arch, cpus, totalmem, freemem, type } from "node:os";
import hmr from "../../utils/hmr.js";
import logDetails from "../start/logDetails.js";
import Securecommand from "./secure.js";
import static_log from "../../global/static.log.js";

export function env(args) {
   const ansi = ANSI();
   
   function envInner(args) { 
     const _get = () => {
       if (args.length === 2) {
          const _env = process.env[args[1]];
          if (_env) console.log(`\n  ${ansi.dim}${args[1]} - ${ansi.reset}${_env}\n`)
          else console.log("\nenv: Cannot get %s\n", args[1] ?? "")
       } else console.log("\nenv: get expected key \n");
     }
     const _set = () => {
       if (args.length === 3 && args[2] !== "") {
           const _env = process.env[args[1]];
           if (_env) console.log("\nenv: %s Already exists\n", args[1])
           else process.env[args[1]] = args[2];
       } else console.log("\nenv: set expected key, value \n");
     }
     const mod = () => { 
       if (args.length === 3 && args[2] !== "") {
           const _env = process.env[args[1]];
           if (!_env) console.log("\nenv: %s Does not exist\n", args[1])
           else process.env[args[1]] = args[2];
       } else console.log("\nenv: mod expected key, value \n");
     }

     switch (args[0]) {
       case "get": _get(); break;
       case "set": _set(); break;
       case "mod": mod(); break;
       default: console.log("\nenv: Invalid argument %s\n", args[0] ?? ""); break;
     }
     return void 0;    
   }
   Securecommand(args, envInner);
}

export function etag(args) {
    if (args.length !== 0) {
        const ansi = ANSI();
        console.log("");
        args.forEach(resource => {
          const data = static_log().find(resource);
          if (data) {
           console.log(`${ansi.bold}/${resource}${ansi.reset}`);
           const tag = 
             `   ${ansi.dim}etag${ansi.reset} ${ansi.green}${data.etag}${ansi.reset}`;
           const lm = new Date(data.lm).toUTCString();
           const lastModified = 
             `   ${ansi.dim}last modified${ansi.reset} ${ansi.green}${lm}${ansi.reset}`;
           console.log(tag);
           console.log(lastModified, "\n");
          } else console.log("cannot find /%s\n", resource);      
        });
        console.log("");
       return void 0;
    } else console.log("\netag expected at least 1 argument\n")
}

export function machine() {
    const ansi = ANSI();
    const cpu = cpus();
    const element = [
        { key: "Architecture", value: arch },
        { key: "Cpu", value: `${cpu[0]?.model}, ${cpu.length} cores` },
        { key: "Node version", value: process.version },
        { key: "Os type", value: type() },
        { key: "Total memory", value: hmr(totalmem()) },
        { key: "Free memory", value: hmr(freemem()) },
    ];
    process.stdout.write("\n");
    element.forEach(elem => { 
      console.log(
        `${ansi.dim} - ${elem.key}${ansi.reset}:  ${ansi.green}${elem.value}${ansi.reset}`
      );
    });
    process.stdout.write("\n");
    return void 0;
}

export function mem() {
    const ansi = ANSI();
    const { heapUsed, external, arrayBuffers } = process.memoryUsage();
    const free = freemem();
    const element = [
        { key: "Heap used", value: heapUsed },
        { key: "External", value: external },
        { key: "Buffers", value: arrayBuffers },
        { key: "Total", value: heapUsed + external + arrayBuffers },
    ];
    const percentage = (element[3].value / free) * 100;
    process.stdout.write("\n");
    element.forEach(elem => {
      console.log(
        `${ansi.dim} - ${elem.key}${ansi.reset}:  ${ansi.white}${hmr(elem.value)}${ansi.reset}`
      );
    });
    console.log(`\n Around ${percentage.toFixed(2)}% of ${hmr(free)}`);
    process.stdout.write("\n");
    return void 0;
}

export function uptime() {
    let seconds = Math.round(process.uptime());
    let minute = Math.floor(seconds / 60);
    let hour = Math.floor(minute / 60);
    seconds = minute > 0 ? seconds - (60 * minute) : seconds;
    minute = hour > 0 ? minute - (60 * hour) : minute;
    console.log(`\nup to ${hour} hour, ${minute} minute, ${seconds} second \n`);
    return void 0;
}

export function winc() {

// function wincviews() {
//     serverMetrics.viewsCache.paths.forEach(e => {
//         console.log(` \x1b[2m${e[0]}\x1b[0m - ${e[1]}`);
//     });
//     let cmm = process.env["view.cacheMaxMem"];
//     let fmem = freemem();
//     const alocmem = hmr(((Number(cmm) * fmem) / 100));
//     fmem = hmr(fmem);
//     console.log(`\x1b[32m
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//       MEMORY USED | ${serverMetrics.viewsCache.memory} |      
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//       MEMORY ALLOCATED | ${alocmem}(${cmm}% of ${fmem}) free mem |     
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// \x1b[0m`);
//     return void 0;
// }
    return void 0;
}

export function whoami() {
    process.stdout.write("\n"); logDetails(); process.stdout.write("\n");
    return void 0;
}