import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styles: [],
})
export class NavigationComponent {
  links = [
    {
      label: 'About',
      route: 'about',
    },
    {
      label: 'Events',
      route: 'events',
    },
    {
      label: 'Contact',
      route: 'contact',
    },
    {
      label: 'Blog',
      route: 'blog',
    },
  ];
}
