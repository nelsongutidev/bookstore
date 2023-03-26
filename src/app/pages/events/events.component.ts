import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styles: [],
})
export class EventsComponent {
  events = [
    {
      name: 'Fiction Book Club',
      location: 'Library',
      cost: 'Free',
      description: 'Join us for a discussion of the book of the month.',
      genre: 'Fiction',
      ageGroup: 'All ages',
    },
    {
      name: 'Science Fiction Book Club',
      location: 'University',
      cost: 'Free',
      description:
        'Join us for a discussion of the latest science fiction novels.',
      genre: 'Science Fiction',
      ageGroup: 'All ages',
    },
    {
      name: "Children's Book Club",
      location: 'Community Center',
      cost: 'Free',
      description:
        'Join us for a fun and interactive reading experience for children.',
      genre: 'Children',
      ageGroup: 'Kids',
    },
    {
      name: 'Young Adult Fiction Book Club',
      location: 'Bookstore',
      cost: 'Free',
      description:
        'Join us for a discussion of the latest young adult fiction bestsellers.',
      genre: 'Young Adult Fiction',
      ageGroup: 'Teens',
    },
    {
      name: 'Mystery Book Club',
      location: 'Coffee Shop',
      cost: 'Free',
      description: 'Join us for a discussion of the latest mystery novels.',
      genre: 'Mystery',
      ageGroup: 'Adults',
    },
    {
      name: 'Young Adult Fiction Book Club',
      location: 'Bookstore',
      cost: 'Free',
      description:
        'Join us for a discussion of the latest young adult fiction bestsellers.',
      genre: 'Young Adult Fiction',
      ageGroup: 'Teens',
    },
    {
      name: 'Mystery Book Club',
      location: 'Coffee Shop',
      cost: 'Free',
      description: 'Join us for a discussion of the latest mystery novels.',
      genre: 'Mystery',
      ageGroup: 'Adults',
    },
    {
      name: 'Young Adult Fiction Book Club',
      location: 'Bookstore',
      cost: 'Free',
      description:
        'Join us for a discussion of the latest young adult fiction bestsellers.',
      genre: 'Young Adult Fiction',
      ageGroup: 'Teens',
    },
  ];
}
