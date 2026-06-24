export default {
  title: "Hitta till Bingsjö",
  hero: {
    imageId: "2026/backen_lzekxy",
    imageAlt: "Vy över Bingsjö med vägar med hus och gårdar i förgrunden och skog och berg i bakgrunden.",
    maskOpacity: "62%",
    slots: [
      {
        type: "eyebrow",
        text: "Vägbeskrivning och parkering"
      },
      {
        type: "title",
        text: "Hitta till Bingsjö"
      },
      {
        type: "markdown",
        text: "Bingsjö ligger i Dalarna, cirka 38 km nordost om Rättvik. Här hittar du information om hur du tar dig till Bingsjö och var du kan parkera."
      }
    ],
    imageOptions: {
      lqipId: "2026/backen_lzekxy"
    }
  },
  intro: `
Till Bingsjö tar du dig enklast med bil, eftersom det inte finns kollektivtrafik som går hela vägen fram. Dala Trafiks bussar trafikerar dagligen Lamborn 6 km söder om Bingsjö vid riksväg 50, men därifrån behöver du ta dig på egen hand till Bingsjö.


Har du inte tillgång till egen bil finns det möjlighet att samåka med andra som ska till Bingsjö. Sedan många år finner förare och passagerare varandra på facebook för att samåka till Bingsjöstämman och andra evenemang och spelmansstämmor. Du hittar länken här nedan.
  `,
  sections: [
    {
      id: "practical-info",
      layout: "callout",
      title: "Samåkning folklig dans & spel i Sverige",
      slots: [
        {
          type: "link",
          text: "Till facebook-gruppen",
          href: "https://www.facebook.com/groups/196115563850086/",
          prefixIcon: "facebook",
          suffixIcon: "arrow-forward",
          className: "c-button--secondary"
        }
      ]
    },
    {
      title: "Vägbeskrivning",
      body: `
Bingsjö ligger längs länsväg 889, cirka 38 km nordost om Rättvik. Kör du från Rättvik tar du riksväg 301 norrut mot Furudal och svänger av mot Bingsjö vid Ingels. Kommer du från Falun, ta riksväg 50 norrut mot Alfta och sväng av mot Bingsjö vid Lamborn. Från Falun är det ca 57 km.

Gå till exempelvis [Google Maps](https://maps.app.goo.gl/oZ83hk3KLDSn6JtN9) för att få en vägbeskrivning från din plats.

![Karta som visar var Bingsjö ligger i förhållande till Rättvik och Falun](/assets/images/karta.jpg)

      `
    },
    {
      title: "Parkeringar",
      body: `
Parkeringarna är markerade på kartan nedan. Dagarna innan onsdagen letar du upp lämplig plats att parkera din bil på. Notera att alla parkeringsplatser har en siffra på skylten vid respektive infart. På onsdagen blir du anvisad en lämplig parkeringsplats utifrån beläggningen för stunden.

Vid kyrkan finns en grusplan med parkering för dig med parkeringstillstånd för rörelsehindrade. Övriga parkeringsplatser är åkrar.

![Parkeringar på stämmoområdet](/assets/images/parkering_2026.svg)
      `
    }
  ]
};