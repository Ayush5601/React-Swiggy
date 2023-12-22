const { createProxyMiddleware } = require("http-proxy-middleware");
const { FETCH_MENU_URL, FETCH_RESTAURANT_URL } = require("./contants");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/restaurants", {
      target: FETCH_RESTAURANT_URL,
      changeOrigin: true,
    })
  );

  app.use(
    "/menu",
    createProxyMiddleware({
      target: FETCH_MENU_URL,
      changeOrigin: true,
    })
  );
};
