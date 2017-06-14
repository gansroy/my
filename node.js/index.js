var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/my/node.js/start"] = requestHandlers.start;
handle["/my/node.js/upload"] = requestHandlers.upload;
handle["/my/node.js/show"] = requestHandlers.show;

server.start(router.route, handle);