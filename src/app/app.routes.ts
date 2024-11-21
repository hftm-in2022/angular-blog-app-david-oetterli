import { Routes } from '@angular/router';
import { BlogListComponent } from './features/blog/components/blog-list/blog-list.component';
import { BlogDetailsComponent } from './features/blog/components/blog-details/blog-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/blogs', pathMatch: 'full' }, // Default route
  { path: 'blogs', component: BlogListComponent }, // Liste der Blogs
  { path: 'blog/:id', component: BlogDetailsComponent }, // Einzelner Blog mit ID
];
