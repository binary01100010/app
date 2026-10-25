import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Homepage } from './components/homepage/homepage/homepage';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Homepage, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('chat');
}
