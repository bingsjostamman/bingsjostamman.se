export default {
  title: "Camping",
  hero: {
    imageId: "2026/camping2025_coe1po",
    imageAlt: "En spelman provar sin fiol inne under tältduken på campingen.",
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
      id: "practical-info",
      layout: "callout",
      title: "Campingbiljetter",
      slots: [
        {
          type: "link",
          text: "Info om entré och biljetter",
          href: "/biljetter/",
          suffixIcon: "arrow-forward",
          className: "c-button--secondary"
        }
      ]
    },
    {
      title: "Var betalar jag campingbiljetten?",
      body: `
Till och med tisdag betalas avgiften till markägaren. På onsdagen är det Bingsjöstämman som tar upp campingavgiften. Då betalar du till våra campingvärdar som går runt på campingplatserna, eller så betalar du i Folkmusikens Hus tält vid bystugeområdet. Passa på att köpa entrébandet på samma gång.

Anländer du på onsdagen betalar du campingavgift och entré vid infarterna till stämmoområdet.
      `,
      scheduleItems: [
        {
          location: "Folkmusikens Hus tält vid bystugeområdet",
          timeText: "Tisdag från kl 16:00"
        },
        {
          location: "Campingvärdar på campingarna",
          timeText: "Onsdag från kl 09:00"
        },
        {
          location: "Infarterna till stämmoområdet",
          timeText: "Vid ankomst på onsdagen"
        }
      ]
    },
    {
      layout: "split",
      uneven: true,
      title: "Camping på stämmoområdet",
      body: `
Tänk på att våra campingar är åkrar med viss terräng. Det kan luta lite, det kan vara en stenbumling att se upp med och vid regn finns det risk att det blir lerigt. Det finns ingen el till husvagnen eller husbilen. 

Vid specifika frågor om olika campingars läge och förutsättningar, kontakta elinore@bingsjostamman.se

### Vatten och sanitet
Invid varje camping finns toaletter uppställda, och vatten finns att hämta vid bystugeområdet. Det finns ingen dusch på området, men 3 km söder om byn i riktning mot Falun finns byns badsjö. I närliggande Dalstuga finns möjligheter till bad och bastu.
      `,
      image: {
        id: "2026/taltcamping2014_fqin9k",
        alt: "Buskspel bland tälten på campingen.",
        options: {
          aspect: "4:3",
          sizes: "(min-width: 600px) 40vw, 100vw",
          lqipId: "2026/taltcamping2014_fqin9k"
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
      title: "Campingplatser",
      body: `
Campingplatserna är markerade på kartan nedan. Dagarna innan onsdagen letar du upp lämplig camping att ställa husbil eller husvagn eller sätta upp ditt tält på. Notera att alla campingar har en bokstav på skylten vid respektive infart. På onsdagen blir du anvisad en lämplig campingplats utifrån beläggningen för stunden.

Har du en extra lång eller tung husbil finns en mindre ställplats på grus vid markeringen O på kartan. Övriga campingar är åkrar.

![Campingplatser på stämmoområdet](/assets/images/camping_2026.svg)
      `
    }
  ]
};