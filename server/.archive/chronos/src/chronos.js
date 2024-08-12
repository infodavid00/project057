/*
Copyright (c) 2024 David.A david40au40@gmail.com
Chronos - A nodeJS hybrid server for building reliable, scalable and secure applications.

Currently, it is recommended to wrap chronos with a well-known reverse proxy like nginx
on production as chronos only supports standard http 1.1 and should not be 
exposed directly to the internet.
*/

"use strict";

import ANSI from "./var/ansi.js";
import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import handleCompression from "./local/start/handleCompression.js";
import { join } from "node:path";
import loadEnv from "./utils/loadEnv.js";
import logDetails from "./local/start/logDetails.js";
import server_options from "./global/server.options.js";
import start from "./local/start/start.js";
import supportsAnsi from "./utils/supportsAnsi.js";

let ansi;
const _start = start;
const disableCLI = () => server_options().setinnerOptions("enableCLI", false)

function stdout(string, color, shouldBreak) {
  process.stdout.write(`${color ? color : ""}${string}${ansi.reset}${shouldBreak ? "\n" : ""}`);
  return void 0;
}

export default class server {
  constructor(pod, options) {
    this.workingDirectory = process.cwd();
    this.pod = pod;
    this.options = options;
  }

  build() {
    const chronosFile = join(this.workingDirectory, "Chronosfile.yml");
    const startFile = join(this.workingDirectory, ".start.js");

    if (supportsAnsi()) {
      process.env["TERMINAL.SUPPORTSANSI"] = "true";
      console.log(ANSI().clearScrenBuffer, ANSI().clearScrollBackBuffer, ANSI().moveCursorToStart);
    } else {
      process.env["TERMINAL.SUPPORTSANSI"] = "false";
      disableCLI();
    }
    ansi = ANSI();

    if (process.argv.includes("::disable-cli")) disableCLI();

    if (existsSync(startFile)) {
      let message = `chronos detected a start script. running node ${startFile} \n`;
      stdout(message, ansi.dim, true);
      execSync(`node ${startFile}`);
    }

    stdout("setting up environment variables ", false, false);

    if (existsSync(chronosFile)) {
      loadEnv(chronosFile);
      stdout("(ok)", ansi.dim, true);
      logDetails();
      handleCompression();
    } else {
      stdout("(bad)", ansi.dim, false);
      stdout(`\ncannot find ${chronosFile}`, false, true);
      process.exit(1);
    }
  }

  startServer() {
    server_options().replaceAll({ pod: this.pod, options: this.options });
    _start();
  }

  start() {
    this.build();
    this.startServer();
  }
}
