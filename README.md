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

Dit project is een Vue.js-gebaseerde app voor het beheren van inspecties in de vastgoedsector. De app bevat vier schermen: openstaande inspecties, uitgevoerde inspecties, instellingen en een knowledge base. Gebruikers kunnen tussen deze schermen navigeren via routing.

## Technologieën

- Vue.js: Dit framework is gekozen vanwege zijn populariteit, flexibiliteit en het is een lichtgewicht framework.
- Vuex: Dit state management-framework is gebruikt om de data van de applicatie op te slaan en te beheren.
- JSON-bestand: De gegevens van de applicatie zijn opgeslagen in een JSON-bestand en worden opgehaald van een web API.
- Vue-router: Dit router-framework is gebruikt om tussen de schermen van de applicatie te navigeren.

## Veiligheid

Om de veiligheid van de applicatie te garanderen, is er een inlogscherm toegevoegd volgens de technische beschrijving in de case. Wachtwoorden worden opgeslagen met behulp van bcrypt-hashing en verificatie wordt uitgevoerd met behulp van JWT-tokens.

## Toegankelijkheid

De toegankelijkheid van de applicatie is verbeterd door gebruik te maken van ARIA-labels en -attributen en door de gebruiksvriendelijkheid te testen met keyboardnavigatie. De applicatie voldoet aan de WCAG 2.1-richtlijnen niveau AA. Ik heb getest of de applicatie voor iemand met 10% zicht te gebruiken is. Dit is helaas de mogelijkheid, omdat mijn moeder dat heeft. Ik heb haar de app laten gebruiken en hierbij wat aanpassingen gedaan, zoals tekstgrotes. 

## Gebruiksvriendelijkheid

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

## Style Guides

In dit project is gebruik gemaakt van de Vue.js-stijlgids en best practices. Er is ook gebruik gemaakt van een CSS-framework (bijvoorbeeld Bulma) om de consistentie van de lay-out te verbeteren.

## Conclusie

In dit project is er hard gewerkt om een veilige, toegankelijke en gebruiksvriendelijke applicatie te bouwen die voldoet aan de eisen van de case. Er zijn echter wel enkele onderdelen die nog verbeterd moeten worden, zoals bijvoorbeeld de zoekfunctie in de knowledge base. Deze zullen in de toekomst verder worden aangepakt.

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