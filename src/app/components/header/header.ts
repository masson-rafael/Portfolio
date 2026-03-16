import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

interface NavLink {
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected readonly navLinks = signal<NavLink[]>([
    { label: 'À propos', fragment: 'about' },
    { label: 'Portfolio', fragment: 'portfolio' },
    { label: 'Parcours', fragment: 'parcours' },
    { label: 'Compétences', fragment: 'skills' },
    { label: 'Me contacter', fragment: 'contact' },
  ]);
}
