import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface Project {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  languages: string;
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
        'Application web de GMAO (Gestion de la Maintenance Assistée par Ordinateur) centralisant la gestion des interventions techniques. C\'est un outil de ticketing permettant la gestion complète du cycle de vie des équipements, avec des Demandes d\'Intervention (DI), des Bons de Travail (BT), des stocks et des rôles utilisateurs.',
      languages: 'Vue.js, Django, MySQL, Docker',
      link: 'https://github.com/maximeBourciez/GIMAO',
    },
    {
      title: 'TimeHarmony',
      image: 'images/th.png',
      imageAlt: 'Capture de TimeHarmony',
      description:
        'Application web responsive pour trouver un créneau libre commun à un groupe de personnes. Elle compare les agendas de tous les participants pour trouver les créneaux libres communs. Un véritable défi algorithmique utilisant le patron MVC avec Twig.',
      languages: 'PHP, Bootstrap, Twig, MySQL, Doxygen',
      link: 'https://github.com/masson-rafael/TimeHarmony',
    },
    {
      title: 'Spellwar',
      image: 'images/spellwar.png',
      imageAlt: 'Capture de Spellwar',
      description:
        'Jeu d\'arcade de type space invaders en C++ où le joueur doit détruire des ennemis en se déplaçant et en tirant des projectiles. Ce jeu 2D tourne sur une console Windows.',
      languages: 'C++',
      link: 'https://github.com/masson-rafael/Spellwar',
    },
    {
      title: 'Algorithmes de parcours de graphes',
      image: 'images/background.png',
      imageAlt: 'Illustration graphe',
      description:
        'Projet Python de test des algorithmes de parcours de graphes classiques (Dijkstra, Bellman-Ford, Floyd Warshall, A*) sur un graphe représentant la ville de Bayonne.',
      languages: 'Python, CSV',
      link: 'https://github.com/masson-rafael/Graphes',
    },
  ]);
}
