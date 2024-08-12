
"use strict";

import server_options from "../../../global/server.options.js";

export default async function handleRequest(request, response) {
  response.send = (statusCode, contentType, content) => {
      response.statusCode = statusCode ?? 200;
      if (contentType) {
        response.setHeader("Content-Type", contentType);
        if (content && request.method !== "HEAD")
          response.end(typeof content === "object" ? JSON.stringify(content) : content)
        else response.end()
      } else response.end()
  };
  const method = request.method;
  let handlerRawPath;
  let pathName = request.url.split("?");
  let queryStrings = pathName[1] ?? "";
  pathName = pathName[0];

  const supportedMethods = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"];
  const rootPod = server_options().getPod();

  function findExecutableHandler(pod, path) {
    const podKeys = Object.keys(pod);
    let localExecutableHandler = false;

    for (let i = 0; i < podKeys.length; i++) {
      const e = podKeys[i];
      const handler = pod[e];
      const workers = handler?.workers;
      const isExecutable = Array.isArray(workers);
      const isMethod = supportedMethods.includes(handler?.method)
        && handler?.method === method ?
        true : false;

      if (isExecutable) {
         const path_h = path.split("/").slice(1); //path_helper
         const e_h = e.split("/").slice(1); //e_helper
         const patterns = [];
         if (path_h.length === e_h.length) {
           path_h.forEach((section, i) => {
              if (section === e_h[i] || e_h[i].startsWith(":")) patterns.push(true)
              else patterns.push(false)
            });
         } else { patterns.push(false) }
         const resourceFound = patterns.every(e => e === true) && isMethod;
        if (resourceFound) {
          handlerRawPath = e;
          localExecutableHandler = handler;
          break;
        }
      } else {
        if (path !== e && "/" + path.split("/")[1] === e) {
           localExecutableHandler = findExecutableHandler(
             handler.workers,
             "/" + path.split("/").slice(2).join("/")
           );
          break;
        }
      }
    }
    return localExecutableHandler;
  }

  let executableHandler = findExecutableHandler(rootPod, pathName);

  if (executableHandler && executableHandler?.workers?.length !== 0) {
    try {
      request.path = pathName;
      request.queryStrings = {};
      queryStrings = queryStrings.split("&");
      for (let i = 0; i < queryStrings.length; i++) {
        const key_value = queryStrings[i].split("=");
        if (key_value[0]) {
          request.queryStrings[key_value[0].trim()] =
            key_value[1] ? key_value[1].trim() : "";
        }
      }
      request.ppvs = {};
      const ppvsHelper_requestPath = pathName.split("/").slice(1);
      const ppvsHelper_handlerPath = handlerRawPath.split("/").slice(1);
      ppvsHelper_handlerPath.forEach((section, i) => {
        if (section.startsWith(":")) {
          request.ppvs[section.slice(1)] = ppvsHelper_requestPath[i]
        }
      });

      let handlers = executableHandler.workers;
      handlers = handlers.map((e, seq) => {
        return e.bind({}, request, response, {
          seq,
          totalWorkers: handlers.length,
          nextWorker: () => {
            if (seq + 1 < handlers.length) {
              return handlers[seq + 1](request, response, this)
            } else return null
          }
        });
      });
      handlers[0]();
    } catch (error) {
      if (error?.message && typeof error?.message === "object") {
        response.send(500, "application/json", JSON.stringify(error.message));
      } else response.send(500, "text/plain", error?.message)
    }
  } else response.send(404, "text/plain", `Cannot ${method} ${pathName}`)
}
