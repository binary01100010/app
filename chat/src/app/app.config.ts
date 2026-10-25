import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideTranslateService({
      lang: 'en',
      fallbackLang: 'de',
      loader: provideTranslateHttpLoader({
        prefix: '/i18n/',
        suffix: '.json',
      }),
    }),
  ],
};

// `provideHttpClient()` stellt den HTTP-Client für das gesamte
// Angular-Projekt bereit.
//
// `provideTranslateHttpLoader()` konfiguriert das Laden der
// Sprachdateien (`de.json`, `en.json`) und nutzt dafür den
// `HttpClient`, der die Dateien tatsächlich über HTTP vom
// Server abruft.
//
// `provideTranslateService()` stellt den Übersetzungsdienst
// (TranslateService) für das gesamte Angular-Projekt bereit
// und ermöglicht dessen Konfiguration, beispielsweise die
// Anfangssprache, Ersatzsprache und den HTTP-Loader.
//
// Der TranslateService bietet Funktionen wie:
// `use('en')` → Sprache auf Englisch wechseln.
// `get('ABOUT_ME')` → Übersetzung abrufen.
// `instant('ABOUT_ME')` → Bereits geladene Übersetzung sofort abrufen.

// `provideBrowserGlobalErrorListeners()` erfasst unbehandelte
// JavaScript- und Promise-Fehler im Browser und leitet sie
// an den Angular ErrorHandler weiter.
