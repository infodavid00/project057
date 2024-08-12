
"use strict";

/**
 * Parses the request body and converts it to a javascript object if the content type 
 * was set to `application/json`. 
 * 
 * The client would get a `400: Could not process your request due to incorrect json string` as a
 * response if the content type was set to `application/json` but chronos could not parse the reqeust body 
 * to a javascript object due to bad json string structure.
 * 
 * @param {object} request - The request object. 
 * @param {object} response - The response object. 
 * @param {object} nextHandler - The next Handler. 
 */
export function rawBodyParser(request, response, nextHandler) {
    let payload = "";
    request.on("data", chunk => {
        payload += chunk;
    });
    request.on("end", () => {
        try {
          const contentType = request.headers["content-type"];
          if (payload && contentType === "application/json") {
                payload = JSON.parse(payload);
          } 
          request.body = payload;
          nextHandler(request, response);
        } catch {
            response.statusCode = 400;
            response.end(
                "Could not process your request due to incorrect json string in the request payload."
            );
        }
    });
}

/**
 * Decodes the request url from percent encoding/url encoded string to plain ascii string.
 * 
 * @param {object} request - The request object. 
 * @param {object} response - The response object. 
 * @param {object} nextHandler - The next Handler. 
 */
export function urlDecoder(request, response, nextHandler) {
    request.url = decodeURIComponent(request.url);
    nextHandler(request, response);
}
