"use strict";

/**
 * A set of functions called "actions" for `sendmail`
 */

module.exports = {
  sendContactEmail: async (ctx, next) => {
    try {
      // const data = ctx.request.body;
      // console.log(data.name);
      // await strapi.plugins["email"].services.email.send({
      //   to: "j.jezik82@gmail.com",
      //   from: "j.jezik82.dummy@gmail.com", //e.g. single sender verification in SendGrid
      //   subject: "The Strapi Email plugin worked successfully",
      //   text: "Hello world!",
      //   html: "Hello world!",
      // });
    } catch (err) {
      ctx.body = err;
    }
  },
};
