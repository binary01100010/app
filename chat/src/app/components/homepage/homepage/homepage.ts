import { Component } from '@angular/core';
import { Header } from '../elements/header/header';

@Component({
  selector: 'app-homepage',
  imports: [Header],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {}
