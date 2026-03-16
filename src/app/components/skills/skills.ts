import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
  color?: string;
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
        { name: 'HTML', icon: 'fab fa-html5', color: '#E34F26' },
        { name: 'CSS', icon: 'fab fa-css3-alt', color: '#1572B6' },
        { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E' },
        { name: 'PHP', icon: 'fab fa-php', color: '#777BB4' },
        { name: 'Angular', icon: 'fab fa-angular', color: '#DD0031' },
        { name: 'Vue.js', icon: 'fab fa-vuejs', color: '#4FC08D' },
        { name: 'Laravel', icon: 'fab fa-laravel', color: '#FF2D20' },
        { name: 'Django', icon: 'fab fa-python', color: '#092E20' },
        { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
        { name: 'Express.js', icon: 'fas fa-server' },
      ],
    },
    {
      title: 'Programmation',
      skills: [
        { name: 'C', icon: 'fas fa-code', color: '#A8B9CC' },
        { name: 'C++', icon: 'fas fa-code', color: '#00599C' },
        { name: 'Java', icon: 'fab fa-java', color: '#ED8B00' },
        { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
      ],
    },
    {
      title: 'Bases de données',
      skills: [
        { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1' },
        { name: 'MariaDB', icon: 'fas fa-database' },
        { name: 'MongoDB', icon: 'fas fa-leaf', color: '#47A248' },
        { name: 'PL/SQL', icon: 'fas fa-database' },
        { name: 'Oracle', icon: 'fas fa-server', color: '#F80000' },
      ],
    },
    {
      title: 'Outils & DevOps',
      skills: [
        { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
        { name: 'SVN', icon: 'fas fa-code-branch' },
        { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED' },
        { name: 'Kubernetes', icon: 'fas fa-dharmachakra', color: '#326CE5' },
        { name: 'Ansible', icon: 'fas fa-cogs', color: '#EE0000' },
        { name: 'UML', icon: 'fas fa-project-diagram' },
        { name: 'Scrum', icon: 'fas fa-users' },
      ],
    },
  ]);
}
