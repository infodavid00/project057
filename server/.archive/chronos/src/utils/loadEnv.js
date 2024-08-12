
"use strict";

import { parse } from "yaml";
import { readFileSync } from "node:fs";
import { SYSTEM } from "../var/system.js";

/** 
 * A function that takes the `Chronosfile.yml` file and parses its contents to the process
 * Environment variables.
 * 
 * @author David.A super-user-d0
 * @param {string} path - The absolute path to where the Chronosfile resides.
 * @returns {void}
 */
export default function loadEnv(path) {
    let chronosfile = readFileSync(path, SYSTEM.encoding);
    chronosfile = parse(chronosfile); 

    const fileKeys = chronosfile !== null ? 
      Object.keys(chronosfile) : [];

    for (let i = 0; i < fileKeys.length; i++) {
      const element = fileKeys[i];
      process.env[element] = chronosfile[element];
    }

    if (!fileKeys.includes("application.name") ||
       chronosfile["application.name"] === null) 
      process.env["application.name"] = "chronos_app";
    // handle default application name
    
    if (!fileKeys.includes("application.version") ||
       chronosfile["application.version"] === null) 
      process.env["application.version"] = "1.0.0";
    // handle default application version

    if (!fileKeys.includes("application.releaseTag") ||
       chronosfile["application.releaseTag"] === null ||
      (fileKeys.includes("application.releaseTag") &&
         !["prod", "dev", "review"].includes(chronosfile["application.releaseTag"])
    )) process.env["application.releaseTag"]
     = "dev";
    // handle default application mode

    if (!fileKeys.includes("listener.port") ||
       chronosfile["listener.port"] === null) 
      process.env["listener.port"] = "8080";
    // handle default port

    if (!fileKeys.includes("listener.address") ||
       chronosfile["listener.address"] === null) 
      process.env["listener.address"] = "127.0.0.1";
    // handle default address

    if (!fileKeys.includes("view.cacheMaxMem") ||
       chronosfile["view.cacheMaxMem"] === null) 
      process.env["view.cacheMaxMem"] = "1";
    // handle default cache maximum memory for views

    if (!fileKeys.includes("view.updateCacheAfter") ||
       chronosfile["view.updateCacheAfter"] === null) 
      process.env["view.updateCacheAfter"] = "180";
    // handle default cache update interval for views

    if (!fileKeys.includes("view.rewriteToEntry") ||
       chronosfile["view.rewriteToEntry"] === null) 
      process.env["view.rewriteToEntry"] = "false";
    // handle default value for rewrites

    if (!fileKeys.includes("view.usesCacheBusting") ||
       chronosfile["view.usesCacheBusting"] === null) 
      process.env["view.usesCacheBusting"] = "false";
    // handle default value for cache busting

    if (!fileKeys.includes("templates.cacheMaxMem") ||
       chronosfile["templates.cacheMaxMem"] === null) 
      process.env["templates.cacheMaxMem"] = "1";
    // handle default cache maximum memory for templates

    if (!fileKeys.includes("templates.updateCacheAfter") ||
       chronosfile["templates.updateCacheAfter"] === null) 
      process.env["templates.updateCacheAfter"] = "180";
    // handle default cache update interval for templates

    if (!fileKeys.includes("newNamespace.srt") ||
       chronosfile["newNamespace.srt"] === null) 
      process.env["newNamespace.srt"] = "Srt";
    // handle default `srt` header name

    return void 0;
}
