import { Component, inject } from '@angular/core';
import { Language } from '../../../../services/language/language';
import { TranslatePipe } from '@ngx-translate/core';
import { VersionHomepage } from '../../../../services/versionHomepage/version-homepage';
import { HEADER_DATA } from './header-data';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  language = inject(Language);
  version = inject(VersionHomepage);

  headerData = HEADER_DATA;

  isOpen = false;

  // `MouseEvent` ist ein TypeScript-Typ, der Informationen über ein
  // Mausereignis enthält, zum Beispiel einen Klick und die Position
  // des Mauszeigers.
  toggleAll(event: MouseEvent): void {
    // event.preventDefault() verhindert die automatische
    // Standardaktion des Browsers, damit du das Verhalten selbst
    // steuern kannst.
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }
}
