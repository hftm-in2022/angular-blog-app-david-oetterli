import { Routes } from '@angular/router';
import { BlogResolver } from './features/blog/resolvers/blog.resolver';

export const routes: Routes = [
  { path: '', redirectTo: '/blogs', pathMatch: 'full' },
  {
    path: 'blogs',
    loadComponent: () =>
      import('./features/blog/components/blog-list/blog-list.component').then(
        (c) => c.BlogListComponent,
      ),
  },
  {
    path: 'blog/:id',
    loadComponent: () =>
      import(
        './features/blog/components/blog-details/blog-details.component'
      ).then((c) => c.BlogDetailsComponent),
    resolve: { blog: BlogResolver },
  },
];
