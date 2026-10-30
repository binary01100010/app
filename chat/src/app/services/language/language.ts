import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class Language {
  translate = inject(TranslateService);
  selectedLanguage = signal<'en' | 'fr' | 'es' | 'ru'>('en');

  constructor() {
    this.selectedLanguageLSF();
  }

  changeLanguage(lang: 'en' | 'fr' | 'es' | 'ru'): void {
    this.translate.use(lang);
    this.selectedLanguage.set(lang);
    localStorage.setItem('selectedLanguageLS', lang);
  }

  selectedLanguageLSF(): void {
    const selectedLanguageLSV = localStorage.getItem('selectedLanguageLS');
    if (
      selectedLanguageLSV === 'en' ||
      selectedLanguageLSV === 'fr' ||
      selectedLanguageLSV === 'es' ||
      selectedLanguageLSV === 'ru'
    ) {
      this.selectedLanguage.set(selectedLanguageLSV);
    }
  }
}
