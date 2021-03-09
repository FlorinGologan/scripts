const handlers = [firstHandler, secondHandler, thirdHandler, forthHandler];

function firstHandler(request, response, next) {
  request.usedBy.push("firstHandler");
  return next(request, response);
}

function secondHandler(request, response, next) {
  request.usedBy.push("secondHandler");
  return next(request, response);
}

function thirdHandler(request, response, next) {
  request.usedBy.push("thirdHandler");
  return { request, response };
}

function forthHandler(request, response, next) {
  request.usedBy.push("forthHandler");
  return next(request, response);
}

function run(handlers) {
  const req = { usedBy: [] };
  const res = { content: "some text" };

  const makeChain = (functions) => {
    const partial = (func, next) => (request, response) =>
      func(request, response, next);

    return functions.reverse().reduce((x, y) => partial(y, x), done);
  };

  const done = (request, response) => {
    request, response;
  };

  const response = makeChain(handlers)(req, res);
  console.log(response);
}

run(handlers);
