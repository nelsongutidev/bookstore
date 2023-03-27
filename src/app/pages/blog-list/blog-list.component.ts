import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-list.component.html',
  styles: [],
})
export class BlogListComponent {
  constructor(private scully: ScullyRoutesService) {}
  posts$: Observable<ScullyRoute[]> = this.scully.allRoutes$.pipe(
    map((routes: any[]) =>
      routes.filter((route: { route: string }) =>
        route.route.startsWith('/blog/')
      )
    )
  );
}
