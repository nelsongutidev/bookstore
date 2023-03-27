import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScullyContentModule } from '@scullyio/ng-lib';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, ScullyContentModule, RouterModule],
  templateUrl: './blog-post.component.html',
  styles: [],
})
export class BlogPostComponent {}
