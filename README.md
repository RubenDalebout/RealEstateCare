# RealEstateCare

# LET OP!
Wanneer u uitlogt wordt alle JSON data gereset. Dit heb ik gedaan, omdat ik wil dat iedereen alles kan aanpassen tijdens het testen. Zodat de volgende persoon die het nakijkt ook weer nieuwe data heeft en alles kan proberen.

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
1. Clone the repository from Github with `git clone <repository-url>``.
2. Install the required packages with `npm install`.
3. Start the development server with `npm run dev`

### Login
There are several accounts available for login, each with a unique email address and password. Below is an overview of the available accounts:

| Email | Password.
|-----------------------|--------------|
| johndoe@realestatecare.com | admin123
| janedoe@realestatecare.com | admin456
| jimsmith@realestatecare.com | admin789
| jennasmith@realestatecare.com | admin101
| jacksond@realestatecare.com | admin112 |
| emmamiller@realestatecare.com | admin121
| michaelj@realestatecare.com | admin131
| ashleyt@realestatecare.com | admin141
| mattm@realestatecare.com | admin151

Please note that these accounts are fictitious and intended for demonstration purposes.

## Live
https://realestatecare-rubendalebout.netlify.app

## Project Description.

This project is a Vue.js-based app for managing inspections in the real estate industry. The app contains four screens: open inspections, performed inspections, settings and a knowledge base. Users can navigate between these screens via routing. Data from the application is retrieved via Axios using jsonbin.io

### Technologies

- Vue.js: This framework was chosen for its popularity, flexibility and it is a lightweight framework.
- Vuex: This state management framework has been used to store and manage the data of the application.
- JSON file: The application's data is stored in a JSON file and retrieved from a Web API.
- Vue router: This router framework has been used to navigate between the screens of the application.

### Security.

To ensure the security of the application, a login screen was added according to the technical description in the case. It also constantly checks if the user is logged in and if the user is linked to the inspection.

### Accessibility

The accessibility of the application was improved by using ARIA labels and attributes and by testing the usability with keyboard navigation. The application complies with WCAG 2.1 guidelines. 
- I made sure that all images have alternative text that tells what the image contains. 
- I made sure that the text size is always 18px. This is the minimum size for people with visual impairments and or screen reader use.
- I made the navigational buttons appear clear and on the dashboard and footer I made the blocks square so they stand out a bit more.
- I had the inputs clearly outlined and they have a focus when you are in them. I also made sure you can navigate between inputs using the arrow keys on your keyboard.
- Tables I don't have so those didn't need to be made clear either
- Forms are clearly present, consisting of titles, labels, inputs and buttons. Also when you focus or click on them you see a blue outline.
- The contrast between text and background is inverted. Thus, when the background is white, the text is black and when the background is black, it is white.

By doing this, I am complying with all the requirements of the WCAG 2.1 guidelines. I also had it tested by a user with visual impairment.

### Usability

The usability of the application has been improved by using Jacob Nielsen's 10 heuristics. For example, by using clear language and an uncluttered layout.
- Heuristics 1 - The user sees a loading icon when he makes the inspection or setting save.
- Heuristics 2 - The application is in English as the provided screenshots, company name et cetera are in English.
- Heuristics 2 - The icons are kept simple and logical by looking at what other companies use for such topics.
- Heuristics 3 - The user can choose to abort the inspecie he is modifying and can return to the parent page on any page with a back button.
- Heuristics 4 - The quick menu bar to navigate is just like most apps at the bottom with large buttons.
- Heuristics 4 - Settings can be found at the top right, after investigation it was found that it is often found loose at the top
- Heuristics 5 - If a user wants to change their password it must be entered 2x for confirmation
- Heuristics 6 - Once a user has entered something somewhere, like on the login page it remembers the entered value and lets it be a suggestion later on
- Heuristics 7 - I created a help page for the inexperienced visitor and the experienced user can change settings for the application at settings at the bottom. So he/she can turn on dark mode there.
- Heuristics 8 - I kept everything so short and sweet, only the much needed information is there visually and textually. Also, you can collapse information so that unnecessary information for that moment can be reduced in inspections.
- Heuristics 9 - I have caught so many errors in terms of page visits by sending the user to the dashboard. For example, if the user runs out of wifi while saving the user gets a nice text.
- Heuristics 10 - The user can find information through the help page and at the bottom is an email link that immediately opens your mail program to email the "developer"

### Style Guides

In my project I adhered to the style guides of VueJS. Using the following points, I will explain how.
- I used a consistent code layout. If I needed to load icons into a vue file, for example, I did this in a script setup, then came the template tag and then lastly the script where everything in terms of imports, variables, methods, exports et cetera needed to be defined. Throughout my project I used indent space 4.
- My components are neatly arranged in a folder structure, for template for main items, such as the header and footer. Form components are in the form folder and alerts, like the wificheck are in alerts folder under the parent components folder.
- All components are consistently written and named according to PascalCase.
- User settings are stored in Vuex for managing these data. Vuex's guidelines have also been followed to accomplish this. For example, I retrieve the data using Getters.
- Slot elements and scoped slots have been used in the components where it is necessary to show custom content depending on the context, this way only icons are loaded on the page where it is actually needed.
- I used mixins on several items, such as binding a style sheet to the application via a bound href attribute.
- I correctly integrated and used an externa library namely, Vuex and Router among others.
- A CSS framework was used for layout consistency, this was applied consistently throughout the application.
- Accessibility has been taken into account when developing the application, such as size of text, contrast, etc. There are no known accessibility issues and it has been tested to WCAG 2.1 guidelines level AA.

### Conclusion

This project has worked hard to build a secure, accessible and user-friendly application that meets the requirements of the case. However, there are some parts that still need improvement, such as a search function in the knowledge-base. This can be done shortly using more delivered documents and or other files that the customer wants. 

## Final word

I hope you got a good view of my work. I have incorporated all the information and feedback from previously submitted assignments. If you always have any questions you can contact me at:
```
rubendalebout@gmail.com
```