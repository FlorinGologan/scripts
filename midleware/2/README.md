# Chaining #2

Very simple way to run chained handlers (middleware) in the provided order.

### Handler

```
function sampleHandler(app) {
  // code execution based on app (request, response...)
  // no need to return something
}
```

### Run

```
app
  .init()
  .apply(firstHandler, secondHandler, thirdHandler, forthHandler)
  .done();

```

### Current Response

```
{
  request: { usedBy: [ 'firstHandler', 'secondHandler', 'thirdHandler'] },
  response: { content: 'some text' }
}
```
