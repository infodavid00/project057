
"use strict";

import kernelInterface from "./interface/kernel/kernel.js";
import { urlDecoder, rawBodyParser } from "../middlewares/@http_parser.js";
import viewInterface from "./interface/views/views.js";

/**
 * @param {object} request - The request object recieved from the http server. 
 * @param {object} response - The response object recieved from the http server. 
 */
function handleRequest(request, response) {
  const srtHeader = request.headers[process.env["newNamespace.srt"].toLowerCase()];
  response.setHeader("Date", new Date().toUTCString());
  response.setHeader("Server", `${process.env["application.name"]}`);
  response.setHeader("X-Powered-By", "chronos");
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.setHeader("X-Frame-Options", "SAMEORIGIN");
  response.setHeader("X-XSS-Protection", "1; mode=block");

  if (srtHeader && srtHeader === "main") {
    rawBodyParser(request, response, kernelInterface);
  } else {
    if (request.method === "GET" || request.method === "HEAD")
      viewInterface(request, response)
    else if (request.method === "OPTIONS") {
      response.statusCode = 204;
      response.setHeader("Allow", "GET, HEAD, OPTIONS");
      response.end();   
    } else {
      response.statusCode = 400;
      response.setHeader("Content-Type", "text/plain");
      response.end(
        `The requested resource expected a HTTP/s method of type GET, HEAD or OPTIONS, but recieved ${request.method}.`
      );
    }
  } //do not process the request payload since
  // its typically not needed when serving static files, which can also enhance the server
  // security by preventing payload injection attacks.
}

/**
 * The default gateway of the chronos server. this function acts as the gatekeeper of 
 * the server and examines every request, routing them to thier appropriate interface.
 * chronos disables cors by default when serving static files. this settings cannot be 
 * adjusted for security purposes (currently).
 * 
 * @author David.A super-user-d0
 * @param {object} request - The request object recieved from the http server. 
 * @param {object} response - The response object recieved from the http server. 
 */
export default function gateway(request, response) {
  urlDecoder(request, response, handleRequest); //always decode the url of every request.
}
