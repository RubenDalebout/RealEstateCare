# RealEstateCare

## Nederlands
### Installatie
1. Kloon de repository van Github met `git clone <repository-url>`
2. Installeer de vereiste packages met `npm install`
3. Start de development server met `npm run dev`

### Inloggen
Er zijn verschillende accounts beschikbaar voor inloggen, met elk een unieke e-mailadres en wachtwoord. Hieronder een overzicht van de beschikbare accounts:

| Email                 | Wachtwoord   |
|-----------------------|--------------|
| johndoe@realestatecare.com | admin123  |
| janedoe@realestatecare.com | admin456  |
| jimsmith@realestatecare.com | admin789 |
| jennasmith@realestatecare.com | admin101 |
| jacksond@realestatecare.com | admin112 |
| emmamiller@realestatecare.com | admin121 |
| michaelj@realestatecare.com | admin131 |
| ashleyt@realestatecare.com | admin141  |
| mattm@realestatecare.com | admin151  |

Let op: deze accounts zijn fictief en bedoeld voor demonstratie-doeleinden.

## Live
https://realestatecare-rubendalebout.netlify.app

## Projectbeschrijving

Dit project is een Vue.js-gebaseerde app voor het beheren van inspecties in de vastgoedsector. De app bevat vier schermen: openstaande inspecties, uitgevoerde inspecties, instellingen en een knowledge base. Gebruikers kunnen tussen deze schermen navigeren via routing. De data van de applicatie wordt opgehaald via Axios d.m.v. jsonbin.io

### Technologieën

- Vue.js: Dit framework is gekozen vanwege zijn populariteit, flexibiliteit en het is een lichtgewicht framework.
- Vuex: Dit state management-framework is gebruikt om de data van de applicatie op te slaan en te beheren.
- JSON-bestand: De gegevens van de applicatie zijn opgeslagen in een JSON-bestand en worden opgehaald van een web API.
- Vue-router: Dit router-framework is gebruikt om tussen de schermen van de applicatie te navigeren.

### Veiligheid

Om de veiligheid van de applicatie te garanderen, is er een inlogscherm toegevoegd volgens de technische beschrijving in de case. Ook word er constant gecheckt of de gebruiker is ingelogd en of de gebruiker gekoppeld is aan de inspectie.

### Toegankelijkheid

De toegankelijkheid van de applicatie is verbeterd door gebruik te maken van ARIA-labels en -attributen en door de gebruiksvriendelijkheid te testen met keyboardnavigatie. De applicatie voldoet aan de WCAG 2.1-richtlijnen. 
- Ik heb gelet erop dat alle afbeeldingen alternatieve teksten hebben die vertellen wat de afbeelding inhoud. 
- Ik heb ervoor gezorgd dat de tekstgrootte altijd 18px is. Dit is de minimale grootte voor mensen met een visuele beperking en of screenreader gebruik.
- Ik heb de navigerende knoppen duidelijk laten voorkomen en op het dashboard en footer heb ik de blokken vierkant gemaakt, zodat ze nog wat meer naar voren springen.
- Ik heb de inputs duidelijk laten omlijnen en ze hebben een focus als je erin zit. Ook heb ik gezorgd dat je kan navigeren tussen de inputs door middel van de pijl toetsen op je toetsenbord.
- Tabellen heb ik niet dus die hoefde ook niet duidelijk gemaakt te worden
- Formulieren zijn duidelijk aanwezig, bestaande uit titels, labels, inputs en buttons. Ook als je erop focust of erop klikt zie je een blauwe omlijning.
- De contrast tussen tekst en achtergrond is inverted. Zo is de tekst bij een witte achtergrond zwart en bij een zwarte achtergrond wit.

Hierdoor neem ik alle voorschriften van de WCAG 2.1-richtlijnen in acht. Ook heb ik het door een gebruiker met visuele beperking laten testen.

### Gebruiksvriendelijkheid

De gebruiksvriendelijkheid van de applicatie is verbeterd door gebruik te maken van de 10 heuristieken van Jacob Nielsen. Bijvoorbeeld door gebruik van heldere taal en een overzichtelijk lay-out.
- Heurstiek 1 - De gebruiker ziet een laad icoon als hij de inspectie of instelling doet opslaan.
- Heurstiek 2 - De applicatie is in het Engels gezien de aangeleverde screenshots, bedrijfsnaam et cetera in het Engels zijn.
- Heurstiek 2 - De iconen zijn simpel en logisch gehouden door te kijken wat andere bedrijven gebruiken bij zulke onderwerpen.
- Heurstiek 3 - De gebruiker kan kiezen om de inspecie die hij aan het aanpassen is om af te breken en kan op elke pagina met een terug knop naar de bovenliggenda pagina
- Heurstiek 4 - De snelle menu balk om te navigeren is net, zoals bij de meeste apps onderaan voorzien van grote knoppen.
- Heurstiek 4 - Instellingen zijn rechts boven te vinden, na onderzoek bleek deze vaak bovenin los te vinden is
- Heurstiek 5 - Als de gebruiker zijn wachtwoord wilt aanpassen moet die 2x worden ingevoerd voor de confirmatie
- Heurstiek 6 - Als een gebruiker eenmaal een keer iets heeft ingevuld ergens, zoals op de inlog pagina onthoud hij de ingevoerde waarde en laat hij dit later als suggestie zijn
- Heurstiek 7 - Ik heb een help pagina gemaakt voor de onervaren bezoeker en de ervaren gebruiker kan instellingen voor de applicatie wijzigen bij instellingen onderin. Zo kan hij/zij de dark mode aanzetten daar.
- Heurstiek 8 - Ik heb alles zo kort en bondig gehouden, alleen de broodnodige informatie is er visueel en tekstueel aanwezig. Ook kan je informatie inklappen, zodat onnodige informatie voor dat moment verkleind kan worden bij de inspecties.
- Heurstiek 9 - Ik heb zoveel fouten qua pagina bezoek opgevangen door de gebruiker naar het dashboard te sturen. Als de gebruiker bijvoorbeeld geen wifi meer het tijdens het opslaan krijgt de gebruiker een leuke tekst te zien.
- Heurstiek 10 - De gebruiker kan via de help pagina informatie vinden en onderaan staat een email link die meteen je mail programma opent om de "developer" te mailen

### Style Guides

Ik heb in mijn project me gehouden aan de styleguides van VueJS. Aan de hand van de volgende punten leg ik uit hoe.
- Ik heb gebruik gemaakt van een consistente code indeling. Als ik in een vue bestand bijvoorbeeld icons moest inladen deed ik dit in een script setup, daarna kwam de template tag en daarna als laatste het script waar alles qua imports, variabels, methods, exports et cetera moest komen gedefineerd. Bij heel mijn project heb ik gebruik gemaakt van indent space 4.
- Mijn componenten zijn netjes ingedeeld in een folder structuur, voor template voor hoofd items, zoals de header en footer. Form componenten zitten in de folder form en alerts, zoals de wificheck zitten in alerts folder onder de parent components folder.
- Alle componenten zijn consistent geschreven en de namen volgens PascalCase genoemd.
- De instellingen van de gebruiker zijn opgeslagen in Vuex voor het beheren van deze gegevens. Ook zijn de richtlijnen van Vuex aangehouden om dit te realiseren. Zo haal ik de gegevens op door middel van Getters.
- Slot-elementen en scoped-slots zijn gebruikt in de componenten waar het noodzakelijk is om aangepaste inhoud te tonen die afhankelijk is van de context, zo worden alleen icons ingeladen op de pagina waar het ook daadwerkelijk nodig is.
- Ik heb op meerdere items mixins gebruikt, zoals bijvoorbeeld het binden van een stijlblad te koppelen aan de applicatie via een gebonden href-attribuut.
- Ik heb een externa library juist geïntegreerd en gebruikt namelijk, Vuex en Router onder andere.
- Er is gebruik gemaakt van een CSS-framework voor de consistentie van de layout, dit is consistent toegepast in de hele applicatie.
- Er is rekening gehouden met toegankelijkheid bij de ontwikkeling van de applicatie, zoals grootte van tekst, contrast, etc. Er zijn geen bekende toegankelijkheidsproblemen en er is getest op WCAG 2.1-richtlijnen niveau AA.

### Conclusie

In dit project is er hard gewerkt om een veilige, toegankelijke en gebruiksvriendelijke applicatie te bouwen die voldoet aan de eisen van de case. Er zijn echter wel enkele onderdelen die nog verbeterd moeten worden, zoals bijvoorbeeld een zoekfunctie in de knowledge-base. Dit kan dadelijk aan de hand van meer geleverde documenten en of andere bestanden die de klant wilt hebben. 

## Slotwoord

Ik hoop dat u goed een zicht heeft gekregen van mijn werk. Ik heb alle informatie en feedback van eerder ingeleverde opdrachten hierin verwerkt. Mocht u altijd nog vragen hebben kunt u me contacteren via:
```
rubendalebout@gmail.com
```

## English
### Installation
1. Clone the Github repository with `git clone <repository-url>`
2. Install the required packages with `npm install`
3. Start the development server with `npm run serve`

### Summary
The RealEstateCare project is a one-page application created for a fictional company that has inspectors. The inspectors can use the application to perform inspections at an address, take photos and upload them. The client's house style was followed.

### Login
There are several accounts available for login, each with a unique email address and password. Below is an overview of the available accounts:

| Email                 | Password    |
|-----------------------|--------------|
| johndoe@realestatecare.com | admin123  |
| janedoe@realestatecare.com | admin456  |
| jimsmith@realestatecare.com | admin789 |
| jennasmith@realestatecare.com | admin101 |
| jacksond@realestatecare.com | admin112 |
| emmamiller@realestatecare.com | admin121 |
| michaelj@realestatecare.com | admin131 |
| ashleyt@realestatecare.com | admin141  |
| mattm@realestatecare.com | admin151  |

Please note: These accounts are fictional and for demonstration purposes only.