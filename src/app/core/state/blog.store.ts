import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BlogService } from '../../features/blog/services/blog.service';
import { BlogPreview } from '../../features/blog/models/blog-preview.model';

@Injectable({
  providedIn: 'root',
})
export class BlogStore {
  private blogsSubject = new BehaviorSubject<BlogPreview[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  blogs$ = this.blogsSubject.asObservable();
  loading$ = this.loadingSubject.asObservable();

  constructor(private blogService: BlogService) {}

  loadBlogs(): void {
    this.loadingSubject.next(true);
    this.blogService.getBlogPosts().subscribe(
      (response) => {
        this.blogsSubject.next(response.data);
        this.loadingSubject.next(false);
      },
      (error) => {
        console.error('Fehler beim Laden der Blogs:', error);
        this.loadingSubject.next(false);
      },
    );
  }
}
