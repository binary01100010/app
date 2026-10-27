import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VersionHomepage {
  selectedVersion = signal<'free' | 'abo'>('abo');

  versionStatus(version: 'free' | 'abo'): void {
    this.selectedVersion.set(version);
  }
}
