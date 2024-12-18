import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { BlogService } from '../services/blog.service';
import { BlogPost } from '../models/blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogResolver implements Resolve<BlogPost> {
  constructor(private blogService: BlogService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<BlogPost> {
    const blogId = route.paramMap.get('id');
    if (blogId) {
      return this.blogService.getBlogPost(Number(blogId));
    }
    return throwError(() => new Error('Blog ID nicht gefunden'));
  }
}
