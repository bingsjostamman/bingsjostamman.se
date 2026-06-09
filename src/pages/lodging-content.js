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
        text: "Ta med ditt tält, husvagn eller husbil och bo mitt i stämman! Alla campingplatser ligger på promenadavstånd från stämmans centrum."
      }
    ],
    imageOptions: {
      lqipId: "2026/camping2025_coe1po"
    }
  },
  intro: `
Bo på campingen och vakna mitt i spelmansstämman. Här samlar vi information om camping på området, hur det fungerar vid ankomst och vad som är bra att känna till innan du rullar in. Byn är inte större än att det är nära till allting, så hitta din plats på campingen och njut av stämningen. Förmodligen får du fantastiska grannar som är lika spelsugna som du.
  `,
  sections: [
    {
      layout: "split",
      uneven: true,
      title: "Camping på stämmoområdet",
      body: `
Campingbiljetten gäller per ekipage och köps på plats vid infarterna eller i Folkmusikens Hus tält när entrén öppnar.

Tänk på att våra campingar är åkrar med viss terräng. Det kan luta lite, och vid regn finns det risk att det blir lerigt. Det är naturcampingar, kort och gott, med allt vad det innebär. Det finns därmed ingen el till husvagnen eller husbilen. 

### Vatten och sanitet
Invid varje camping finns toaletter uppställda, och vatten finns att hämta vid bystugeområdet. Det finns ingen dusch på området, men 3 km söder om byn i riktning mot Falun finns byns badsjö. I närliggande Dalstuga finns möjligheter till bad och bastu.
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
      layout: "split",
      uneven: true,
      title: "Vikigt att tänka på",
      body: `
Det är viktigt att du som campare följer de anvisningar som finns på plats, både för att det ska fungera så smidigt som möjligt och för att alla ska få en så bra upplevelse som möjligt. Här är några saker som är bra att känna till:
- Varje camping är utmärkt med skyltar, och på åkern är det markerat med vägar och ytor för att ställa tält, husvagn eller husbil.
- Det är viktigt att du ställer dig inom de markerade områdena och inte blockerar det som är väg för att underlätta för dina grannar på campingen men också för eventuella utryckningsfordon om en situation skulle upppstå.
- Husvagnar måste placeras med draget ut mot vägen så att de lätt kan flyttas undan av räddningstjänsten vid behov.
- Ekipage med gasolkök måste också stå med tillräckligt avstånd till andra husvagnar och husbilar, se anvisningar på plats.
- Följ eventuella anvisningar från Rättviks kommun gällande eldningsförbud eller liknande, och respektera de regler som gäller för att elda på campingen.

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