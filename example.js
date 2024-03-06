Object.prototype.tap = function (fn) {
  return fn(this);
};

[1, 2, 3, 4, 5].tap(console.log);
new Date().tap(console.log);
