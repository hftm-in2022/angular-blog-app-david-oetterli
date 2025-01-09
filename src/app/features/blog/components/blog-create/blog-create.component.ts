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
  isSubmitting = false; // Status für Ladespinner

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

  onSubmit() {
    if (this.blogForm.invalid) return;

    this.isSubmitting = true; // Spinner aktivieren
    console.log('Blog-Daten:', this.blogForm.value);

    this.blogService.createBlogPost(this.blogForm.value).subscribe({
      next: (response) => {
        console.log('Erfolgreich erstellt:', response);
        this.router.navigate(['/blogs']);
      },
      error: (err) => {
        console.error('Fehler beim Erstellen des Blogs:', err);
      },
      complete: () => {
        this.isSubmitting = false; // Spinner deaktivieren
      },
    });
  }

  onReset() {
    this.blogForm.reset(); // Formular zurücksetzen
  }

  protected readonly FormGroup = FormGroup;
}
