module.exports = {
  route: {
    GET: {},
    POST: {},
  },
  get(path, func) {
    this.route.GET[path] = func;
  },
  post(path, func) {
    this.route.POST[path] = func;
  },
};
