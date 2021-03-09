const app = require("./app");

function firstHandler(app) {
  app.request.usedBy.push("firstHandler");
}

function secondHandler(app) {
  app.request.usedBy.push("secondHandler");
}

function thirdHandler(app) {
  app.request.usedBy.push("thirdHandler");
}

function forthHandler(app) {
  app.request.usedBy.push("forthHandler");
}

app
  .init()
  .apply(firstHandler, secondHandler, thirdHandler, forthHandler)
  .done();
