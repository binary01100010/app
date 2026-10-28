import { Component, inject } from '@angular/core';
import { VersionHomepage } from '../../../../services/versionHomepage/version-homepage';

@Component({
  selector: 'app-top-header',
  imports: [],
  templateUrl: './top-header.html',
  styleUrl: './top-header.scss',
})
export class TopHeader {
  version = inject(VersionHomepage);
}
