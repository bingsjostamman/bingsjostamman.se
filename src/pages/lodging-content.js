export default {
  title: "Camping",
  hero: {
    imageId: "2026/camping2025_coe1po",
    imageAlt: "EN spelman provar sin fiol inne under tältduken på campingen.",
    maskOpacity: "62%",
    slots: [
      {
        type: "eyebrow",
        text: "Boende under stämman"
      },
      {
        type: "title",
        text: "Camping"
      },
      {
        type: "markdown",
        text: "Bo nära stämman och vakna mitt i spelmansveckan. Här kan vi lägga in **rikare hero-innehåll** utan att behöva skriva template-markup i sidan."
      },
      {
        type: "link",
        text: "Se biljettinfo",
        href: "/biljetter/#camping"
      }
    ],
    imageOptions: {
      lqipId: "2026/camping2025_coe1po"
    }
  },
  intro: `
Bo nära stämman och vakna mitt i spelmansveckan. Här samlar vi den löpande informationen om camping på området, hur det fungerar vid ankomst och vad som är bra att känna till innan du rullar in.

Sidan är också vår första testyta för en mer generell innehållsmall, så innehållet kan byggas ut efter hand när detaljerna för årets camping är klara.
  `,
  sections: [
    {
      layout: "split",
      uneven: true,
      title: "Camping på stämmoområdet",
      body: `
Campingbiljetten gäller per ekipage och köps på plats vid infarterna eller i Folkmusikens Hus tält när entrén öppnar.

Vi kommer att fylla på den här sidan med mer exakt information om placering, service och tider. Mallen stödjer redan både löpande text och responsiva bilder direkt från innehållsdata.
      `,
      image: {
        id: "2026/camping2010_zp9dv1",
        alt: "Skyltar markerar var camping är tillåten på stämmoområdet.",
        options: {
          aspect: "4:3",
          sizes: "(min-width: 600px) 40vw, 100vw",
          lqipId: "2026/camping2010_zp9dv1"
        }
      }
    },
    {
      id: "practical-info",
      layout: "callout",
      title: "Praktisk information",
      slots: [
        {
          type: "markdown",
          text: "Campingavgiften gäller per ekipage och hanteras i samma flöde som entrén när du kommer till området."
        }
      ]
    },
    {
      title: "Köp biljett när du kommer",
      body: "Du kan köpa både entréband och camping när du anländer till stämman.",
      scheduleItems: [
        {
          location: "Folkmusikens Hus tält vid bystugeområdet",
          timeText: "Tisdag från kl 17:00"
        },
        {
          location: "Infarterna till stämmoområdet",
          timeText: "Vid ankomst på onsdagen"
        }
      ],
      slots: [
        {
          type: "link",
          text: "Gå till entré och biljetter",
          href: "/biljetter/#camping",
          className: "c-button--secondary c-button--mini"
        }
      ]
    },
    {
      title: "Bra att veta",
      slots: [
        {
          type: "markdown",
          text: "- Campingavgiften gäller per ekipage, till exempel tält, husvagn eller husbil.\n- Entréband och camping hanteras i samma flöde när du anländer till området.\n- När årets praktiska detaljer är fastställda kan vi fortsätta lägga in fler textblock eller bilder utan att behöva ändra själva sidmallen."
        }
      ]
    }
  ]
};