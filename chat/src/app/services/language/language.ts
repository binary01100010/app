import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class Language {
  translate = inject(TranslateService);
  selectedLanguage = signal<'de' | 'en' | 'fr' | 'es' | 'ru'>('en');

  changeLanguage(lang: 'de' | 'en' | 'fr' | 'es' | 'ru'): void {
    this.translate.use(lang);
    this.selectedLanguage.set(lang);
  }
}
