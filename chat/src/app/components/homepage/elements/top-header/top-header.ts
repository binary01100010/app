import { Component, inject } from '@angular/core';
import { VersionHomepage } from '../../../../services/versionHomepage/version-homepage';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-top-header',
  imports: [TranslatePipe],
  templateUrl: './top-header.html',
  styleUrl: './top-header.scss',
})
export class TopHeader {
  version = inject(VersionHomepage);
}
