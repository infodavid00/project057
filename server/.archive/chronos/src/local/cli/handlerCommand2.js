
// import server_metrics from "../server.metrics.js";
// import server_options from "../server.options.js";

// const serverMetrics = server_metrics();
// const serverOptions = server_options();




// function lookupviews() {
//     const metric = serverMetrics.views;
//     let ttnosucessfulRequests = 0;
//     Object.keys(metric.OK).forEach(e => {
//         const elem = metric.OK[e];
//         ttnosucessfulRequests += elem?.req_gz ?? 0;
//         ttnosucessfulRequests += elem?.req_br ?? 0;
//         ttnosucessfulRequests += elem?.req ?? 0;
//     })
//     ttnosucessfulRequests = ttnosucessfulRequests + metric.NOT_MODIFIED;
//     console.log(`\n\x1b[4msum\x1b[0m`);
//     console.log(`  total number of requests \x1b[32m${ttnosucessfulRequests + metric.NOT_FOUND.req + metric.INTERNAL_SERVER_ERROR }\x1b[0m`);
//     console.log(`  total successful (+ccvh) \x1b[32m${ttnosucessfulRequests}\x1b[0m, ccvh (status 304) \x1b[32m${metric.NOT_MODIFIED}\x1b[0m`);
//     console.log(`  total failed due to server error \x1b[32m${metric.INTERNAL_SERVER_ERROR}\x1b[0m`);
//     console.log(`  total where the resource was not found \x1b[32m${metric.NOT_FOUND.req}\x1b[0m, paths: `);
//     metric.NOT_FOUND.paths.forEach((e, i) => {
//         process.stdout.write(`\x1b[32m${e}\t\x1b[0m`);
//         if (i === (metric.NOT_FOUND.paths.length - 1)) console.log();
//     })
//     console.log("\nNOTE -> CCVH as in 'client cache validation hits/etag validation hits'");
//     return void 0;
// }

// function traceviews(resource) {
//     let metric = serverMetrics.views.OK;
//     const metrickeys = Object.keys(metric);
//     const single = metric[resource];
//     const handleLog = (name, contents) => {
//         const nsToms = 1000000;
//         console.log(`\x1b[1m${name}\x1b[0m\t\x1b[2mgzip\x1b[0m: \x1b[32m${contents.req_gz} requests\x1b[0m`);
//         console.log(`\x1b[8m${name}\x1b[0m\t\x1b[2mbrotli\x1b[0m: \x1b[32m${contents.req_br} requests\x1b[0m`);
//         console.log(`\x1b[8m${name}\x1b[0m\t\x1b[2mplain\x1b[0m: \x1b[32m${contents.req} requests\x1b[0m`);
//         console.log(`\x1b[8m${name}\x1b[0m\t\x1b[2mbestresponsetime\x1b[0m: \x1b[32m${Number(contents.bestResponseTimes)/nsToms}ms\x1b[0m`);
//         console.log(`\x1b[8m${name}\x1b[0m\t\x1b[2mworstresponsetime\x1b[0m: \x1b[32m${Number(contents.worsteResponseTime)/nsToms}ms\x1b[0m\n`);
//     }
//     if (resource) {
//         if (single) handleLog(resource, single)
//         else console.log("No entry for /%s", resource);
//     } else {
//         if (metrickeys.length > 0) {
//             metrickeys.forEach(e => {
//                 handleLog(e, metric[e]);
//             });
//         } else console.log("No entry");
//     }
//     return void 0;
// }



export default function handleCommand(command) {
//     else if (command === "trace views" || command.startsWith("trace views "))
//          traceviews(command.split(" ")[2] ?? "")
//     else {
//         switch (command) {
//             case "winc views": { wincviews(); break; }
//         }
//     }
}

