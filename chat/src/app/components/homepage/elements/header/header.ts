import { Component, inject } from '@angular/core';
import { Language } from '../../../../services/language/language';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  language = inject(Language);
}
