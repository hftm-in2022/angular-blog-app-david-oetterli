import { inject } from '@angular/core';
import { ResolveFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Blog } from '../models/blog';
import { catchError, of } from 'rxjs';

export const BlogResolver: ResolveFn<Blog> = (
  route: ActivatedRouteSnapshot,
) => {
  const blogService = inject(BlogService);
  const router = inject(Router);

  const blogId = route.paramMap.get('id');
  if (!blogId) {
    router
      .navigate(['/blogs'])
      .then(() => console.log('Navigation erfolgreich!'));
    return of();
  }

  return blogService.loadBlogById(+blogId).pipe(
    catchError((error) => {
      console.error('Fehler beim Laden des Blogs:', error);
      router
        .navigate(['/blogs'])
        .then(() => console.log('Navigation erfolgreich!'));
      return of();
    }),
  );
};
