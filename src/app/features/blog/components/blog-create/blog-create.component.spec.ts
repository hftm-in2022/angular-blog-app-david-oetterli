import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogCreateComponent } from './blog-create.component'; // Import der Standalone-Komponente
import { By } from '@angular/platform-browser';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // HttpClientTestingModule importieren
import { isAuthenticatedGuard } from '../../../../core/auth/is-authenticated.guard';
import { BlogService } from '../../services/blog.service'; // Falls BlogService verwendet wird
import { TranslateModule, TranslateStore } from '@ngx-translate/core';

// Mocking des OidcSecurityService
class MockOidcSecurityService {
  checkAuth() {
    return of({ isAuthenticated: true }); // Benutzer als authentifiziert mocken
  }

  getAccessToken() {
    return of('mocked-access-token'); // Zugangstoken zurückgeben
  }
}

// Mocking des isAuthenticatedGuard
const mockIsAuthenticatedGuard = () => {
  return of(true); // Der Guard wird immer erlauben, dass die Route betreten wird
};

describe('BlogCreateComponent', () => {
  let fixture: ComponentFixture<BlogCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        BlogCreateComponent,
        HttpClientTestingModule,
        TranslateModule.forRoot(), // Übersetzungen initialisieren
      ],
      providers: [
        { provide: OidcSecurityService, useClass: MockOidcSecurityService }, // Mock des Authentifizierungsdienstes
        { provide: isAuthenticatedGuard, useFactory: mockIsAuthenticatedGuard }, // Mock des Guards
        BlogService, // BlogService hier angeben
        TranslateStore, // WICHTIG: TranslateStore bereitstellen
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogCreateComponent);
    fixture.detectChanges();
  });

  it('sollte das BlogCreateComponent korrekt laden', () => {
    const titleInput = fixture.debugElement.query(
      By.css('input[formControlName="title"]'),
    );
    expect(titleInput).toBeTruthy(); // Sicherstellen, dass das Title-Feld existiert
  });

  it('sollte ein Inhalt-Eingabefeld haben', () => {
    const contentInput = fixture.debugElement.query(
      By.css('textarea[formControlName="content"]'),
    );
    expect(contentInput).toBeTruthy(); // Sicherstellen, dass das Content-Feld existiert
  });
});
