import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface Project {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  technologies: string[];
  link?: string;
}

@Component({
  selector: 'app-portfolio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  protected readonly projects = signal<Project[]>([
    {
      title: 'GIMAO',
      image: 'images/gimao.png',
      imageAlt: 'Capture de GIMAO',
      description:
        'Application web de GMAO centralisant la gestion des interventions techniques. C\'est un outil de ticketing permettant la gestion complète du cycle de vie des équipements, avec des Demandes d\'Intervention (DI), des Bons de Travail (BT), des stocks et des rôles utilisateurs.',
      technologies: ['Vue.js', 'Django', 'MySQL', 'Docker'],
      link: 'https://github.com/maximeBourciez/GIMAO',
    },
    {
      title: 'TimeHarmony',
      image: 'images/th.png',
      imageAlt: 'Capture de TimeHarmony',
      description:
        'Application web responsive pour trouver un créneau libre commun à un groupe de personnes. Elle compare les agendas de tous les participants pour trouver les créneaux libres communs. Un véritable défi algorithmique utilisant le patron MVC avec Twig.',
      technologies: ['PHP', 'Bootstrap', 'Twig', 'MySQL', 'Doxygen'],
      link: 'https://github.com/masson-rafael/TimeHarmony',
    },
    {
      title: 'Algorithmes de parcours de graphes',
      image: 'images/background.png',
      imageAlt: 'Illustration graphe',
      description:
        'Projet Python de test des algorithmes de parcours de graphes classiques (Dijkstra, Bellman-Ford, Floyd Warshall, A*) sur un graphe représentant la ville de Bayonne.',
      technologies: ['Python', 'CSV'],
      link: 'https://github.com/masson-rafael/Graphes',
    },
    {
      title: 'Spellwar',
      image: 'images/spellwar.png',
      imageAlt: 'Capture de Spellwar',
      description:
        'Jeu d\'arcade de type space invaders en C++ où le joueur doit détruire des ennemis en se déplaçant et en tirant des projectiles. Ce jeu 2D tourne sur une console Windows.',
      technologies: ['C++'],
      link: 'https://github.com/masson-rafael/Spellwar',
    },
  ]);

  getTechColor(tech: string): string {
    const colors: Record<string, string> = {
      'Vue.js': '#4FC08D',
      'Django': '#ffc107',
      'MySQL': '#4479A1',
      'Docker': '#2496ED',
      'PHP': '#777BB4',
      'Bootstrap': '#7952B3',
      'Twig': '#A9B322',
      'Doxygen': '#000000',
      'C++': '#00599C',
      'Python': '#3776AB',
      'CSV': '#217346',
      'Angular': '#DD0031'
    };
    return colors[tech] || 'var(--tertiary)';
  }
}
