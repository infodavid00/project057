
"use strict";

import handleRequest from "./handleRequest.js";
import server_options from "../../../global/server.options.js";

/**
 * The handler responsible for processing internal kernel routing.
 * 
 * @author David.A super-user-d0
 * @param {object} request - The request object recieved from the http server. 
 * @param {object} response - The response object recieved from the http server. 
 */
export default function kernelInterface(request, response) {
    const method = request.method;
    const serverOptions = server_options();
    
    const allowedMethods = "GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS, TRACE";
    const allowedOrigin = serverOptions.getOptions()?.cors?.allowOrigin;
    const setCorsHeaders = () => {
        response.setHeader("Access-Control-Allow-Origin", allowedOrigin);
        response.setHeader("Access-Control-Allow-Methods", allowedMethods);
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Access-Control-Max-Age", "3600");
    }
    if (method === "TRACE") {
      const capitalizeWord = word => {
          const newWord = word[0].toUpperCase()+ word.slice(1);
          return newWord;
      }
      const requestHeaders = request.headers;
      const requestLine = `${method} ${request.url} HTTP/${request.httpVersion}`;
      let headers = "";
        Object.keys(requestHeaders).forEach(e => {
          headers += `${capitalizeWord(e)}: ${requestHeaders[e]}\r\n`;
      });
      const body =
            request.body && requestHeaders["content-type"] === "application/json" ?
              JSON.stringify(request.body, null, 3) : request.body ?? "";
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/plain");  
      response.end(requestLine + "\r\n" + headers + "\r\n" + body);
      //echoback request.
    } else if (method === "OPTIONS") {
      response.statusCode = 200;
      response.setHeader("Allow", allowedMethods);
      if (allowedOrigin) setCorsHeaders()
      response.end();
      // send server options.
    } else {
      if (allowedOrigin) setCorsHeaders()
      handleRequest(request, response);
    }
}