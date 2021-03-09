let app = {};

app.init = function init() {
  this.request = { usedBy: [] };
  this.response = { content: "some text" };

  return this;
};

app.apply = function apply(...functions) {
  for (let func of functions) {
    func(this);
  }
  return this;
};

app.done = async function () {
  console.log({
    request: this.request,
    response: this.response,
  });
};

module.exports = app;
