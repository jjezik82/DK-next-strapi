module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "strapi-provider-email-smtp",
      providerOptions: {
        host: "smtp.gmail.com", //SMTP Host
        port: 465, //SMTP Port
        secure: true,
        username: "j.jezik82.dummy@gmail.com",
        password: "stpksaqepejefbql",
        rejectUnauthorized: true,
        requireTLS: true,
        connectionTimeout: 1,
      },
      settings: {
        from: "j.jezik82.dummy@gmail.com",
        replyTo: "j.jezik82.dummy@gmail.com",
      },
    },
  },
});
