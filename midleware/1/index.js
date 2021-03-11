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
  //return next(request, response);
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

    return functions
      .reverse()
      .reduce((next, func) => partial(func, next), done);
  };

  const done = (request, response) => {
    console.log("--executed all handlers-");
    return {
      request,
      response,
    };
  };

  const response = makeChain(handlers)(req, res);
  console.log(response);
}

run(handlers);
