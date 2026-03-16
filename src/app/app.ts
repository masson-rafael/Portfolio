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
  template: `
    <app-header />
    <main>
      <app-about />
      <app-portfolio />
      <app-parcours />
      <app-skills />
      <app-contact />
    </main>
  `,
  styles: `
    main {
      margin-top: 0;
    }
  `,
})
export class App {}
