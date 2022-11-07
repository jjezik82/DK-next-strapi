module.exports = {
  routes: [
    {
      method: "POST",
      path: "/sendmail",
      handler: "sendmail.sendContactEmail",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
