import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

type ParcoursTab = 'experiences' | 'formation';

interface ParcoursItem {
  title: string;
  description: string;
  location: string;
  period: string;
  badge?: 'Alternance' | 'Stage';
}

@Component({
  selector: 'app-parcours',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './parcours.html',
  styleUrl: './parcours.css',
})
export class Parcours {
  protected readonly activeTab = signal<ParcoursTab>('experiences');

  protected readonly experiences = signal<ParcoursItem[]>([
    {
      title: 'Développement Web Fullstack',
      description: 'J\'effectue mon alternance en développement web chez Salamandre, où je participe à une évolution majeure de l\'application Fusion, conçue pour la restauration collective. Le projet consiste notamment à migrer l\'application d\'AngularJS vers Angular 20+, tout en modernisant l\'interface et en développant de nouveaux modules. J\'ai également été intégré au fonctionnement de l\'équipe en prenant part aux différentes réunions, ce qui m\'a permis de développer mes compétences en gestion de projet et de travail en équipe.',
      location: 'Salamandre - Toulouse, France',
      period: 'Depuis Septembre 2025',
      badge: 'Alternance',
    },
    {
      title: 'Développement Web Fullstack',
      description: 'Stage de 10 semaines en tant que développeur fullstack. J\'ai développé une application web interne complète, en intervenant aussi bien sur le front-end que sur le back-end, ainsi que la base de données. Elle permet aux employés de signaler leurs présences de manière calendaire dans les locaux, intégrant sécurité et interface ergonomique.',
      location: 'Salamandre - Toulouse, France',
      period: 'Avril 2025 - Juin 2025',
      badge: 'Stage',
    },
  ]);

  protected readonly formations = signal<ParcoursItem[]>([
    {
      title: 'BUT Informatique',
      description: 'Formation complète en informatique couvrant la gestion de projet, les réseaux, les bases de données et le développement. Grande montée en compétences et accentuation de ma passion pour le développement à travers de nombreux projets pratiques.',
      location: 'UPPA - IUT de Bayonne et du Pays Basque, Anglet, France',
      period: '2023 - 2026',
    },
    {
      title: 'Baccalauréat général',
      description: 'Parcours général avec spécialités Mathématiques et Numérique et Sciences Informatiques. Acquisition de bases solides en mathématiques, algorithmique et développement Python. Baccalauréat obtenu avec mention bien.',
      location: 'Lycée général René Cassin - Bayonne, France',
      period: '2020 - 2023',
    },
  ]);

  protected selectTab(tab: ParcoursTab): void {
    this.activeTab.set(tab);
  }
}
