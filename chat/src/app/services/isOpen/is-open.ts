import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IsOpen {
  isOpen = signal(false);

  constructor() {
    this.isOpenGetLS();
  }

  isOpenSetLS(event: MouseEvent): void {
    event.preventDefault();

    this.isOpen.set(!this.isOpen());

    localStorage.setItem('isOpenLS', String(this.isOpen()));
  }

  isOpenGetLS(): void {
    const isOpenLSV: string | null = localStorage.getItem('isOpenLS');
    if (isOpenLSV === 'false' || isOpenLSV === 'true') {
      this.isOpen.set(isOpenLSV === 'true');
    }
  }
}
