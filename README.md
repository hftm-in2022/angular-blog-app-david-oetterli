# BlogApp

Dieses Projekt ist eine Blog-Anwendung, erstellt mit [Angular CLI](https://github.com/angular/angular-cli) Version 18.2.9.

## Übersicht

Die BlogApp ist eine Angular-Anwendung, die es Nutzern ermöglicht, Blog-Beiträge zu erstellen, zu verwalten und anzuzeigen. Sie besteht aus mehreren Komponenten, Services und Modulen, die zusammenarbeiten, um eine benutzerfreundliche und leistungsfähige Webanwendung zu bieten.

## Erste Schritte

### Voraussetzungen

- Node.js und npm sollten installiert sein. [Download Node.js](https://nodejs.org/)
- Angular CLI sollte installiert sein: `npm install -g @angular/cli`

### Installation

1. Klone das Repository:
   ```bash
   git clone https://github.com/hftm-in2022/angular-blog-app-david-oetterli.git
   ```
2. Wechsle in das Projektverzeichnis:
   ```bash
   cd angular-blog-app-david-oetterli
   ```
3. Installiere die Abhängigkeiten:
   ```bash
   npm install
   ```

### Starten der Anwendung

1. Starte den Entwicklungsserver:
   ```bash
   ng serve
   ```
2. öffne deinen Browser und navigiere zu `http://localhost:4200/`.

## Entwicklungsserver

Führe `ng serve` aus, um einen Entwicklungsserver zu starten. Navigiere zu `http://localhost:4200/`. Die Anwendung wird automatisch neu geladen, wenn Quellcodedateien geändert werden.

## Code-Gerüste

Verwende `ng generate component komponenten-name`, um eine neue Komponente zu erstellen. Weitere Optionen:

- `ng generate directive|pipe|service|class|guard|interface|enum|module`

## Build

Führe `ng build` aus, um das Projekt zu bauen. Die Build-Artefakte werden im `dist/`-Verzeichnis gespeichert.

## Unit-Tests ausführen

Verwende `ng test`, um die Unit-Tests mit [Karma](https://karma-runner.github.io) auszuführen.

## End-to-End-Tests ausführen

Verwende `ng e2e`, um End-to-End-Tests mit einer Plattform deiner Wahl auszuführen. Dafür muss zuerst ein Paket installiert werden, das End-to-End-Testfähigkeiten implementiert.

## Komponenten

### App-Komponenten

#### `AppComponent`

Die Hauptkomponente, die als Einstiegspunkt der Anwendung dient. Sie definiert das Grundgerüst und bindet die Routing-Logik ein.

#### `SidebarComponent`

Eine Komponente für die Navigation in der Anwendung. Sie bietet Links zu den verschiedenen Bereichen der BlogApp.

### Blog-Komponenten

#### `BlogListComponent`

Zeigt eine Liste aller verfügbaren Blog-Beiträge an. Nutzt `BlogService`, um Daten aus dem Backend zu laden.

#### `BlogDetailsComponent`

Zeigt die Details eines einzelnen Blog-Beitrags. Erhält die Daten über den `BlogResolver`, der vor dem Laden der Route die notwendigen Informationen bereitstellt.

#### `BlogCreateComponent`

Ermöglicht es Nutzern, neue Blog-Beiträge zu erstellen. Verwendet ein Formular mit Validierung und ruft den `BlogService` auf, um den Beitrag zu speichern.

### Core-Komponenten

#### `IsAuthenticatedGuard`

Eine Guard-Klasse, die sicherstellt, dass nur authentifizierte Benutzer auf geschützte Routen zugreifen können.

#### `HttpInterceptor`

Ein Interceptor, der HTTP-Anfragen abfängt und zusätzliche Header hinzufügt, wie z. B. Authentifizierungsinformationen.

#### `GlobalErrorHandlerService`

Ein zentraler Service für das Management und Logging von Fehlern in der Anwendung.

### Shared-Komponenten

#### `SidebarComponent`

Gemeinsame Navigation, die in verschiedenen Bereichen der Anwendung wiederverwendet wird.

## Services

### BlogService

Bietet Methoden zum Laden, Erstellen und Verwalten von Blog-Beiträgen. Kommuniziert mit einem REST-API-Backend.

## Features

- **Blog-Erstellung**: Erstelle, bearbeite und lösche Blog-Beiträge.
- **Blog-Listenansicht**: Zeigt eine Liste aller verfügbaren Blog-Beiträge an.
- **Blog-Detailansicht**: Zeigt die Details eines einzelnen Blog-Beitrags an.
- **Authentifizierung**: Integrierte Login- und Logout-Funktionalität.

## Technologien

- **Angular 18**: Framework für Frontend-Entwicklung
- **SCSS**: Styling der Komponenten
- **Karma**: Test-Framework für Unit-Tests
- **TypeScript**: Typsicheres JavaScript

## Weitere Hilfe

Für weitere Hilfe zur Angular CLI verwende `ng help` oder besuche die [Angular CLI Dokumentation](https://angular.dev/tools/cli).
