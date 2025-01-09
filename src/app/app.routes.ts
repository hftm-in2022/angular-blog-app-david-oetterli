import { Routes } from '@angular/router';
import { BlogResolver } from './features/blog/resolvers/blog.resolver';
import { isAuthenticatedGuard } from './core/auth/is-authenticated.guard';

export const routes: Routes = [
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
  {
    path: 'create-new-blog',
    loadComponent: () =>
      import(
        './features/blog/components/blog-create/blog-create.component'
      ).then((c) => c.BlogCreateComponent),
    canActivate: [isAuthenticatedGuard],
  },
  { path: '**', redirectTo: '/blogs', pathMatch: 'full' },
];
