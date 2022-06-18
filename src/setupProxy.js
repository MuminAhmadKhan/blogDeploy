const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(proxy.createProxyMiddleware("/api/*", { target: "https://blogstore.herokuapp.com" }));
};
