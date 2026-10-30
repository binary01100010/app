import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VersionHomepage {
  selectedVersion = signal<'free' | 'abo'>('abo');

  constructor() {
    this.versionLSF();
  }

  versionStatus(version: 'free' | 'abo'): void {
    this.selectedVersion.set(version);
    localStorage.setItem('versionLS', version);
  }

  versionLSF(): void {
    const versionLS = localStorage.getItem('versionLS');

    if (versionLS === 'free' || versionLS === 'abo') {
      this.selectedVersion.set(versionLS);
    }
  }
}
