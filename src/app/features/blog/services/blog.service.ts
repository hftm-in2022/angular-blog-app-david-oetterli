import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost, BlogPreview, CreateBlog } from '../models/blog.model';

interface BlogResponse {
  data: BlogPreview[];
  totalCount: number;
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl =
    'https://d-cap-blog-backend---v2.whitepond-b96fee4b.westeurope.azurecontainerapps.io/entries';

  constructor(private http: HttpClient) {}

  // Methode zum Laden der Blogs mit Unterstützung für Paginierung
  getBlogPosts(pageIndex = 0, pageSize = 10): Observable<BlogResponse> {
    const params: Record<string, string> = {
      pageIndex: pageIndex.toString(),
      pageSize: pageSize.toString(),
    };

    return this.http.get<BlogResponse>(this.apiUrl, { params });
  }

  // Holt einen bestimmten Blogpost
  getBlogPost(id: number): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${this.apiUrl}/${id}`);
  }

  // Erstellt einen neuen Blogpost
  createBlogPost(blog: CreateBlog): Observable<BlogPost> {
    return this.http.post<BlogPost>(`${this.apiUrl}`, blog);
  }

  // Löscht einen Blogpost
  deleteBlogPost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
