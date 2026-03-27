import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';

interface SkillUsage {
  context: string;
  detail: string;
}

interface Skill {
  name: string;
  icon: string;
  color?: string;
  summary: string;
  usages: SkillUsage[];
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  protected readonly categories = signal<SkillCategory[]>([
    {
      title: 'Web',
      skills: [
        {
          name: 'HTML',
          icon: 'fab fa-html5',
          color: '#E34F26',
          summary: 'Structure sémantique des pages et composants.',
          usages: [
            { context: 'Portfolio', detail: 'Sections structurées, navigation ancrée et hiérarchie claire.' },
            { context: 'TimeHarmony', detail: 'Templates de pages pour la recherche de créneaux communs.' },
          ],
        },
        {
          name: 'CSS',
          icon: 'fab fa-css3-alt',
          color: '#1572B6',
          summary: 'Design system, responsive et animations.',
          usages: [
            { context: 'Portfolio', detail: 'Cartes, animations de fond, carrousel et thème clair/sombre.' },
            { context: 'TimeHarmony', detail: 'Mise en forme responsive de l’interface de planification.' },
          ],
        },
        {
          name: 'JavaScript',
          icon: 'fab fa-js',
          color: '#F7DF1E',
          summary: 'Comportements interactifs côté client.',
          usages: [
            { context: 'Web', detail: 'Navigation dynamique et interactions UI sur les projets web.' },
            { context: 'TimeHarmony', detail: 'Interactions côté client pour fluidifier l’expérience utilisateur.' },
          ],
        },
        {
          name: 'PHP',
          icon: 'fab fa-php',
          color: '#777BB4',
          summary: 'Back-end web et logique métier.',
          usages: [
            { context: 'TimeHarmony', detail: 'Moteur de comparaison d’agendas et routes applicatives.' },
          ],
        },
        {
          name: 'Angular',
          icon: 'fab fa-angular',
          color: '#DD0031',
          summary: 'Architecture du portfolio et composants réutilisables.',
          usages: [
            { context: 'Portfolio (ce site)', detail: 'Structure par sections et composants standalone.' },
            { context: 'Portfolio (ce site)', detail: 'Gestion d’état locale avec signals (thème, carrousel).' },
          ],
        },
        {
          name: 'Vue.js',
          icon: 'fab fa-vuejs',
          color: '#4FC08D',
          summary: 'UI métier orientée maintenance et ticketing.',
          usages: [
            { context: 'GIMAO', detail: 'Écrans de suivi DI/BT avec workflows d’intervention.' },
            { context: 'GIMAO', detail: 'Composants de formulaires et tableaux pour les stocks.' },
          ],
        },
        {
          name: 'Laravel',
          icon: 'fab fa-laravel',
          color: '#FF2D20',
          summary: 'Développement web structuré en MVC.',
          usages: [
            { context: 'Projets académiques', detail: 'Mise en place d’APIs et de modèles métiers.' },
          ],
        },
        {
          name: 'Django',
          icon: 'fab fa-python',
          color: '#ffc107',
          summary: 'API et logique métier serveur.',
          usages: [
            { context: 'GIMAO', detail: 'Gestion des tickets, utilisateurs, rôles et permissions.' },
          ],
        },
        {
          name: 'Node.js',
          icon: 'fab fa-node-js',
          color: '#339933',
          summary: 'Exécution JavaScript côté serveur.',
          usages: [
            { context: 'GIMAO (alternance)', detail: 'Tooling et scripts d’appui pour l’application de stage.' },
          ],
        },
        {
          name: 'Express.js',
          icon: 'fas fa-server',
          summary: 'APIs HTTP légères et rapides à prototyper.',
          usages: [
            { context: 'GIMAO (alternance)', detail: 'Mise en place d’endpoints techniques pour besoins internes.' },
          ],
        },
      ],
    },
    {
      title: 'Programmation',
      skills: [
        {
          name: 'C',
          icon: 'fas fa-code',
          color: '#A8B9CC',
          summary: 'Bases systèmes et programmation bas niveau.',
          usages: [
            { context: 'BUT Informatique', detail: 'Manipulation mémoire, structures et performance.' },
          ],
        },
        {
          name: 'C++',
          icon: 'fas fa-code',
          color: '#00599C',
          summary: 'Performance, structures et logique de jeu.',
          usages: [
            { context: 'Spellwar', detail: 'Boucle de jeu, collisions et gestion des entrées joueur.' },
          ],
        },
        {
          name: 'Java',
          icon: 'fab fa-java',
          color: '#ED8B00',
          summary: 'Programmation orientée objet et applications robustes.',
          usages: [
            { context: 'BUT Informatique', detail: 'Conception orientée objet, structures de données, écriture et exécution de tests unitaires pour valider la logique.' },
          ],
        },
        {
          name: 'Python',
          icon: 'fab fa-python',
          color: '#3776AB',
          summary: 'Algorithmique et scripts de traitement.',
          usages: [
            { context: 'Graphes', detail: 'Implémentation de Dijkstra, Bellman-Ford, Floyd-Warshall et A*.' },
          ],
        },
      ],
    },
    {
      title: 'Bases de données',
      skills: [
        {
          name: 'MySQL',
          icon: 'fas fa-database',
          color: '#4479A1',
          summary: 'Stockage relationnel et requêtes métier.',
          usages: [
            { context: 'GIMAO', detail: 'Équipements, interventions, pièces et historiques.' },
            { context: 'TimeHarmony', detail: 'Stockage des utilisateurs et des disponibilités.' },
          ],
        },
        {
          name: 'MariaDB',
          icon: 'fas fa-database',
          summary: 'Alternative SQL compatible MySQL.',
          usages: [
            { context: 'GIMAO', detail: 'Usage côté stage pour les besoins relationnels de l’application.' },
          ],
        },
        {
          name: 'MongoDB',
          icon: 'fas fa-leaf',
          color: '#47A248',
          summary: 'Stockage documentaire pour données flexibles.',
          usages: [
            { context: 'BUT Informatique', detail: 'Travaux pratiques de modélisation orientée documents.' },
          ],
        },
        {
          name: 'PL/SQL',
          icon: 'fas fa-database',
          summary: 'Procédures et logique côté base.',
          usages: [
            { context: 'BUT Informatique', detail: 'Exercices de procédures stockées et optimisation SQL.' },
          ],
        },
        {
          name: 'Oracle',
          icon: 'fas fa-server',
          color: '#F80000',
          summary: 'Écosystème base de données entreprise.',
          usages: [
            { context: 'BUT Informatique', detail: 'Travail sur schémas relationnels et administration de base.' },
          ],
        },
      ],
    },
    {
      title: 'Outils & DevOps',
      skills: [
        {
          name: 'Git',
          icon: 'fab fa-git-alt',
          color: '#F05032',
          summary: 'Versionnement et collaboration continue.',
          usages: [
            { context: 'Tous les projets', detail: 'Branches de fonctionnalités et revues de code.' },
          ],
        },
        {
          name: 'SVN',
          icon: 'fas fa-code-branch',
          summary: 'Versionnement centralisé.',
          usages: [
            { context: 'GIMAO (alternance)', detail: 'Maintenance sur dépôts historiques de l’application de stage.' },
          ],
        },
        {
          name: 'Docker',
          icon: 'fab fa-docker',
          color: '#2496ED',
          summary: 'Environnements homogènes pour dev et exécution.',
          usages: [
            { context: 'GIMAO', detail: 'Conteneurisation de l’application et des services associés.' },
          ],
        },
        {
          name: 'Kubernetes',
          icon: 'fas fa-dharmachakra',
          color: '#326CE5',
          summary: 'Orchestration de conteneurs.',
          usages: [
            { context: 'BUT Informatique', detail: 'Apprentissage des concepts de déploiement et de scalabilité.' },
          ],
        },
        {
          name: 'Ansible',
          icon: 'fas fa-cogs',
          color: '#EE0000',
          summary: 'Automatisation de configuration.',
          usages: [
            { context: 'BUT Informatique', detail: 'Initiation au provisioning et à l’automatisation répétable.' },
          ],
        },
        {
          name: 'UML',
          icon: 'fas fa-project-diagram',
          summary: 'Conception avant implémentation.',
          usages: [
            { context: 'Tous les projets', detail: 'Diagrammes de classes et de séquences pour cadrer les apps.' },
          ],
        },
        {
          name: 'Scrum',
          icon: 'fas fa-users',
          summary: 'Organisation itérative orientée résultat.',
          usages: [
            { context: 'Projets d’équipe', detail: 'Sprint planning, priorisation et suivis incrémentaux.' },
          ],
        },
      ],
    },
  ]);

  protected readonly activeTab = signal('Web');
  protected readonly tabs = computed(() => this.categories().map((category) => category.title));
  protected readonly activeCategory = computed(
    () => this.categories().find((category) => category.title === this.activeTab()) ?? this.categories()[0],
  );

  protected selectTab(tab: string): void {
    this.activeTab.set(tab);
  }
}
