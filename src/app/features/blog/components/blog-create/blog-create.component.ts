import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  styleUrls: ['./blog-create.component.scss'],
})
export class BlogCreateComponent {
  blogForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private blogService: BlogService,
    private router: Router,
  ) {
    // Initialisiere das Formular mit Validatoren
    this.blogForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(): void {
    // Überprüfen, ob das Formular gültig ist
    if (this.blogForm.valid) {
      const blogData = this.blogForm.value;

      // Sende die Blog-Daten an den Service
      this.blogService.createBlogPost(blogData).subscribe({
        next: () => {
          console.log('Blog erfolgreich erstellt!');
          this.router.navigate(['/blogs']); // Navigiere zurück zur Blogübersicht
        },
        error: (error) => {
          console.error('Fehler beim Erstellen des Blogs:', error);
        },
      });
    }
  }

  protected readonly FormGroup = FormGroup;
}
