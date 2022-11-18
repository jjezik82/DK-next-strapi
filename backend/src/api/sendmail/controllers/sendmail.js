"use strict";

/**
 * A set of functions called "actions" for `sendmail`
 */

module.exports = {
  sendContactEmail: async (ctx, next) => {
    try {
      const req = await ctx.request;
      const data = JSON.parse(req.body);

      await strapi.plugins["email"].services.email.send({
        to: data.email,
        from: "noreply@dobra-karma.sk",
        subject: `Ďakujeme ${data.name}`,
        html: `<div style="height: 200px; background-color:#02979E;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;">
                    <div style="width: 200px;height: 100px;background-color: #fdfbfb;margin-left: auto;margin-right: auto;border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;border-top: 0.05px solid #f7f7f7;text-align: center;">
                      <img src="https://www.dobra-karma.sk/themes/dobra-karma/assets/images/dobra-karma-logo.png" style="width: auto;height: 100%;margin-left: auto;margin-right: auto;">
                    </div>
                    <h5 style="color:#ffffff; font-size:20px;text-align:center">Ďakujeme že ste nás kontaktovali.</h5>
                </div>
                <p style="font-size:15px;text-align:center;margin-top: 70px;margin-bottom: 120px;font-weight: bold;">Na Vašu správu sa pokúsime odpovedať v čo najkratšej dobe.</p>
                <div style="width: 200px;border-top:2px solid green;margin-left: auto;margin-right: auto;"></div>
                <div style="text-align:center;padding-top: 20px;padding-bottom: 20px;">
                  <a href="https://www.facebook.com/people/Dobr%C3%A1-Karma-veg%C3%A1nske-syry/100063637614894/"><img src="https://cdn-icons-png.flaticon.com/512/1077/1077041.png" style="height: 50px;"></a>
                  <a href="https://www.instagram.com/dobrakarma_sk/?fbclid=IwAR1dxjy0o-WtcfxfzdmF-9zFa1mvon6bheoD7MRQAvPyNJfn0sNAvnFAmAw"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111491.png" style="height: 50px;"></a>
                  <p style="font-size: 15px;font-weight: bold;">Dobrá Karma s.r.o.</p>
                </div>`,
      });

      await strapi.plugins["email"].services.email.send({
        to: "j.jezik82.dummy@gmail.com",
        from: data.email,
        subject: "Nová správa z kontaktného formuláru",
        html: `<div style="height: 200px; background-color:#02979E;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;">
                    <div style="width: 200px;height: 100px;background-color: #fdfbfb;margin-left: auto;margin-right: auto;border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;border-top: 0.05px solid #f7f7f7;text-align: center;">
                      <img src="https://www.dobra-karma.sk/themes/dobra-karma/assets/images/dobra-karma-logo.png" style="width: auto;height: 100%;margin-left: auto;margin-right: auto;">
                    </div>
                    <h5 style="color:#ffffff; font-size:20px;text-align:center">Nová správa od užívateľa ${data.name}: "${data.subject}"</h5>
                </div>
                <p style="font-size:15px;text-align:center;margin-top: 70px;margin-bottom: 120px;font-weight: bold;">${data.message}</p>
                <div style="width: 200px;border-top:2px solid green;margin-left: auto;margin-right: auto;"></div>
                <div style="text-align:center;padding-top: 20px;padding-bottom: 20px;">
                  <a href="https://www.facebook.com/people/Dobr%C3%A1-Karma-veg%C3%A1nske-syry/100063637614894/"><img src="https://cdn-icons-png.flaticon.com/512/1077/1077041.png" style="height: 50px;"></a>
                  <a href="https://www.instagram.com/dobrakarma_sk/?fbclid=IwAR1dxjy0o-WtcfxfzdmF-9zFa1mvon6bheoD7MRQAvPyNJfn0sNAvnFAmAw"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111491.png" style="height: 50px;"></a>
                  <p style="font-size: 15px;font-weight: bold;">Dobrá Karma s.r.o.</p>
                </div>`,
      });

      return ctx.send(
        {
          message: "The email was sent!",
          ok: true,
        },
        200
      );
    } catch (err) {
      return ctx.badRequest(
        "Prepáčte, niekde nastala chyba. Skúste poslať správu neskôr."
      );
    }
  },
};
