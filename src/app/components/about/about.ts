import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface Tab {
  id: string;
  label: string;
}

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly activeTab = signal('presentation');

  protected readonly tabs = signal<Tab[]>([
    { id: 'presentation', label: 'Présentation' },
    { id: 'langues', label: 'Langues' },
    { id: 'softskills', label: 'Soft skills' },
    { id: 'passions', label: 'Passions' },
  ]);

  protected selectTab(tabId: string): void {
    this.activeTab.set(tabId);
  }
}
