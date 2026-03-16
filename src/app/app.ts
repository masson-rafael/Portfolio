import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Parcours } from './components/parcours/parcours';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Header, About, Skills, Parcours, Portfolio, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
