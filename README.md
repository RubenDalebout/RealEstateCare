## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Uitleg in doen en laten (Web components)

Beste docent,
Ik heb gebruik gemaakt van VueJS en onderdelen van de framework ionic. Als styling library gebruik ik ook nog Bootstrap. Ik heb gekozen om de header en footer als componenten te maken, zodat ik deze overal globaal kan gebruiken. Daarnaast heb ik de views gemaakt voor elke pagina, zodat hier later alle content kan gaan komen voor de applicatie. De enige view die al is ingevuld is die van het dashboard (voorpagina). Ik heb gekozen om de router component hiervoor te gebruiken om te switchen tussen de views. Hierdoor refresht de pagina niet en is het een SPA applicatie.

Met vriendelijke groet,

Ruben Dalebout.

### Uitleg in doen en laten (Datamodellen en data formats)

Beste docent,
Ik begon eerst met het aanmaken van het JSON bestand. Ik heb deze geplaatst in een data folder binnen de src folder. Ik heb gekozen om de key inspections te geven aan de gehele array met in het achterhoofd dat de app ooit in de toekomst zou worden uitgebreid met meer dan alleen inspecties. Binnen deze array heb ik per inspectie gekozen om elk onderdeel erin te verwerken. Zoals gevraagd is alles in het Engels geschreven en heb ik 5 dummy inspecties toegevoegd. Daarna ben ik begonnen met eerst alles op te halen voor in het dashboard view. Ik heb gekozen om de axios library hiervoor te gebruiken. Nadat ik response kreeg heb ik het geplaatst in een datamodel en ben ik begonnen met het loopen van de resultaten. Toen dit is gelukt was ik vergeten dat ik korte detail informatie moest geven en dan met een model alle gegevens van de inspectie moest laten zien. Hierdoor heb ik aan de inspectie een detail array toegevoegd met: wie de inspectie heeft gedaan, wanneer en of de inspectie was afgerond. Dit is ook zichtbaar op het dashboard. Als je dan op de button klikt krijg je een bootstrap modal te zien met alle informatie van de betreffende inspectie. De modal wordt geopend in een apart component en is alleen zichtbaar als de showModel variabel true is.

Ik hoop dat ik u hiermee genoeg heb geinformeerd.

Met vriendelijke groet,

Ruben Dalebout.

Github link: https://github.com/DeEchteZeeuw/RealEstateCare/
