import { Component, signal, ChangeDetectionStrategy, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

interface NavLink {
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onScroll()'
  },
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  protected readonly navLinks = signal<NavLink[]>([
    { label: 'À propos', fragment: 'about' },
    { label: 'Portfolio', fragment: 'portfolio' },
    { label: 'Parcours', fragment: 'parcours' },
    { label: 'Compétences', fragment: 'skills' },
    { label: 'Me contacter', fragment: 'contact' },
  ]);

  protected readonly isDarkMode = signal<boolean>(false);
  protected readonly isAtTop = signal<boolean>(true);

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: Object) {}

  onScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isAtTop.set(window.scrollY < 20);
    }
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.isAtTop.set(window.scrollY < 20);
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const savedTheme = localStorage.getItem('theme');
      
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        this.isDarkMode.set(true);
        this.applyTheme();
      }
    }
  }

  protected toggleTheme() {
    this.isDarkMode.update(v => !v);
    this.applyTheme();
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', this.isDarkMode() ? 'dark' : 'light');
    }
  }

  private applyTheme() {
    if (this.isDarkMode()) {
      this.document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      this.document.documentElement.setAttribute('data-theme', 'light');
    }
  }
}
