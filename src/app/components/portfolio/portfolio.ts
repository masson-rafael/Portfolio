import {
  Component,
  signal,
  computed,
  ChangeDetectionStrategy,
  Inject,
  PLATFORM_ID,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { NgOptimizedImage, isPlatformBrowser } from '@angular/common';

interface Project {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  technologies: string[];
  focuses: string[];
  link?: string;
}

@Component({
  selector: 'app-portfolio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio implements OnInit, OnDestroy {
  protected readonly projects = signal<Project[]>([
    {
      title: 'GIMAO',
      image: 'images/gimao.png',
      imageAlt: 'Capture de GIMAO',
      description:
        'Application web de GMAO centralisant la gestion des interventions techniques. C\'est un outil de ticketing permettant la gestion complète du cycle de vie des équipements, avec des Demandes d\'Intervention (DI), des Bons de Travail (BT), des stocks et des rôles utilisateurs.',
      technologies: ['Vue.js', 'Django', 'MySQL', 'Docker'],
      focuses: [
        'Interface Vue.js orientée workflow pour suivre DI et BT.',
        'Back-end Django avec gestion des droits utilisateurs et des statuts de tickets.',
        'Base MySQL structurée pour les équipements, stocks et historiques d’interventions.',
      ],
      link: 'https://github.com/maximeBourciez/GIMAO',
    },
    {
      title: 'TimeHarmony',
      image: 'images/th.png',
      imageAlt: 'Capture de TimeHarmony',
      description:
        'Application web responsive pour trouver un créneau libre commun à un groupe de personnes. Elle compare les agendas de tous les participants pour trouver les créneaux libres communs. Un véritable défi algorithmique utilisant le patron MVC avec Twig.',
      technologies: ['PHP', 'Bootstrap', 'Twig', 'MySQL', 'Doxygen'],
      focuses: [
        'Algorithmique de comparaison de disponibilités entre plusieurs participants.',
        'Architecture MVC en PHP avec rendu Twig pour séparer logique et interface.',
        'Interface responsive Bootstrap pour un usage desktop et mobile.',
      ],
      link: 'https://github.com/masson-rafael/TimeHarmony',
    },
    {
      title: 'Algorithmes de parcours de graphes',
      image: 'images/background.png',
      imageAlt: 'Illustration graphe',
      description:
        'Projet Python de test des algorithmes de parcours de graphes classiques (Dijkstra, Bellman-Ford, Floyd Warshall, A*) sur un graphe représentant la ville de Bayonne.',
      technologies: ['Python', 'CSV'],
      focuses: [
        'Implémentation et comparaison de plusieurs algorithmes de plus court chemin.',
        'Import et traitement de données CSV pour construire le graphe de la ville.',
        'Validation des résultats par scénarios de test sur différents points de départ/arrivée.',
      ],
      link: 'https://github.com/masson-rafael/Graphes',
    },
    {
      title: 'Spellwar',
      image: 'images/spellwar.png',
      imageAlt: 'Capture de Spellwar',
      description:
        'Jeu d\'arcade de type space invaders en C++ où le joueur doit détruire des ennemis en se déplaçant et en tirant des projectiles. Ce jeu 2D tourne sur une console Windows.',
      technologies: ['C++'],
      focuses: [
        'Boucle de jeu en temps réel avec gestion d’entrée clavier.',
        'Système de collisions pour tirs, ennemis et score.',
        'Structuration du code en modules de gameplay réutilisables.',
      ],
      link: 'https://github.com/masson-rafael/Spellwar',
    },
  ]);

  protected readonly currentSlide = signal(0);
  protected readonly projectCount = computed(() => this.projects().length);
  protected readonly activeProject = computed(() => this.projects()[this.currentSlide()]);
  private autoScrollId: ReturnType<typeof setInterval> | null = null;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {}

  ngOnInit(): void {
    this.resumeAutoScroll();
  }

  ngOnDestroy(): void {
    this.pauseAutoScroll();
  }

  protected previousProject(): void {
    this.currentSlide.update((index) =>
      index === 0 ? this.projectCount() - 1 : index - 1,
    );
    this.restartAutoScroll();
  }

  protected nextProject(): void {
    this.currentSlide.update((index) =>
      index === this.projectCount() - 1 ? 0 : index + 1,
    );
  }

  protected goToSlide(index: number): void {
    this.currentSlide.set(index);
    this.restartAutoScroll();
  }

  protected pauseAutoScroll(): void {
    if (this.autoScrollId !== null) {
      clearInterval(this.autoScrollId);
      this.autoScrollId = null;
    }
  }

  protected resumeAutoScroll(): void {
    if (!isPlatformBrowser(this.platformId) || this.autoScrollId !== null) {
      return;
    }
    this.autoScrollId = setInterval(() => this.nextProject(), 5000);
  }

  private restartAutoScroll(): void {
    this.pauseAutoScroll();
    this.resumeAutoScroll();
  }

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

  getTechTextColor(tech: string): string {
    if (tech === 'Django' || tech === 'JavaScript') {
      return '#1f2a30';
    }
    return '#ffffff';
  }
}
