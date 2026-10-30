import { Component, inject } from '@angular/core';
import { Language } from '../../../../services/language/language';
import { TranslatePipe } from '@ngx-translate/core';
import { VersionHomepage } from '../../../../services/versionHomepage/version-homepage';
import { HEADER_DATA } from './header-data';
import { IsOpen } from '../../../../services/isOpen/is-open';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  language = inject(Language);
  version = inject(VersionHomepage);
  isOpen = inject(IsOpen);

  headerData = HEADER_DATA;
}
