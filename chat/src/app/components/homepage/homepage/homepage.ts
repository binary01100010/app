import { Component } from '@angular/core';
import { Header } from '../elements/header/header';
import { TopHeader } from '../elements/top-header/top-header';

@Component({
  selector: 'app-homepage',
  imports: [Header, TopHeader],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {}
