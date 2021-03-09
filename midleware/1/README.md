# Chaining #1

Very simple way to run chained handlers (middleware) in the provided order.

### Option 1 - Execute and pass to the next handler

```
function sampleHandler(request, response, next) {
  // code execution based on request, response

  return next(request, response);
}
```

### Option 2 - Execute and stop processing the next handlers

```
function sampleHandler(request, response, next) {
  // code execution based on request, response

  return {request, response};
}
```

### Run

```
run([
  firstHandler,
  secondHandler,
  thirdHandler,
  forthHandler
]);

```


### Current Response

```
{ 
  request: { usedBy: [ 'firstHandler', 'secondHandler', 'thirdHandler'] },
  response: { content: 'some text' } 
}
```
