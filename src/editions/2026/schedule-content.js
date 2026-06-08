export default {
  intro: `
Vårt program för onsdagen omfattar många scener och programpunkter. För att du ska få en överblick över allt som händer under stämman, hittar du här visuella spelscheman. Det finns uppdelade scheman för Dansa, Lyssna respektive Spela & Sjung. Längst ned på sidan finns också ett spelschema där alla scener och programpunkter finns med.

Dra i sidled för att se de scener som inte syns om du använder en smal skärm, som exempelvis en telefon. Använder du skärmläsare som hjälpmedel, eller vill läsa onsdagsprogrammet i sin helhet, se istället det [fullständiga programmet för onsdag 1 juli](/onsdag/).
  `,
  sections: [
    {
      title: "Dansa",
      titleIcon: "dance",
      description: `
Knyt skorna och följ med ut i den virvlande dansen på våra tre dansbanor! **Dansbanan** och **Dansladu** erbjuder dans till spelmanslag på större dansgolv, medan **Danielsgårdens loge** är platsen för de mindre konstellationerna och de mer intima dansupplevelserna.

Vill du också spela till dans? Anmäl dig i Folkmusikens hus tält för att bli uppskriven på spellistorna.

      `,
      timeline: {
        day: "onsdag",
        type: "dansa",
      },
    },
    {
      title: "Lyssna",
      titleIcon: "music",
      description: `
Det finns många tillfällen att få de där lyssnarupplevelserna som berör. Flera av våra scener på Bingsjöstämman viger vi åt lyssnande publik, även om spontandans också välkomnas! Ny lyssnarscen för i år är **Bystuguscenen** där musiken hamnar mitt i folkvimlet på bystugeområdet. Det är upplagt för god stämning och publikkontakt!

**Tunet** är som vanligt scenen för finlir med en ofta andäktig publik, med **Kapellet** är spelplatsen för speciellt inbjudna konsertakter. Invigningsprogrammet på **Dansbanan**, eller stora scenen som den också ibland kallas är det som officiellt inleder Bingsjöstämman och avslutas några timmar senare med ett välfyllt allspel, då hundratals spelmän äntrar scenen och tillsammans lyfter både tält-taket och hela himlen över Bingsjö. 

      `,
      timeline: {
        day: "onsdag",
        type: "lyssna",
        stages: ["Nygårdsgården", "Dansbanan", "Kapellet", "Tunet", "Bystuguscenen"],
      },
    },
    {
      title: "Spela & sjung",
      titleIcon: "violinist",
      description: `
Utöver [vårt kursutbud](/kurser/) finns det flera möjligheter till att spela eller sjunga med. Vill du hänga med på allspelet men är osäker på låtarna finns det chans till att träna på **Logen** under eftermiddagen. Är du ute efter att lära dig några nya låtar eller kanske träffa nya spelkompisar så fylls garanterat de senaste årens succé **Låttältet** med spelsugna stämmobesökare och spelledare från några av våra spelmanslag.

Söker du en stunds stillhet är **Levande Ladan** platsen för dig. En intim och mysig scen där sången får ta plats under visstugan, men som även inbjuder till öppen scen för alla som vill dela med sig av en låt eller två.
      `,
      timeline: {
        day: "onsdag",
        types: ["spela", "kurs", "sjung"],
        stages: ["Logen", "Låttältet", "Levande Ladan"],
      },
    },
    {
      title: "Alla programpunkter och scener",
      titleIcon: "fioler",
      description: `
Har du svårt att välja? Eller vill du få en överblick över allt som händer under onsdagen? Här har vi samlat alla scener och programpunkter i ett och samma spelschema. Dra i sidled för att se de scener som inte syns om du använder en smal skärm, som exempelvis en telefon.
      `,
      breakout: true,
      timeline: {
        day: "onsdag",
        types: ["lyssna", "dansa", "spela", "kurs", "sjung", "upplev"],
        stages: [
            "Bingsjö",
            "Bagarstugan",
            "Dansladu",
            "Bystuguscenen",
            "Kapellet",
            "Nygårdsgården",
            "Dansbanan",
            "Låttältet",
            "Danielsgården",
            "Tunet",
            "Logen",
            "Levande Ladan",
        ]
      },
    },
  ],
};