import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  TranslateModule,
  TranslateService,
  TranslateStore,
} from '@ngx-translate/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

class MockBreakpointObserver {
  observe() {
    return of({ matches: false }); // Simuliert ein Desktop-Gerät
  }
}

class MockOidcSecurityService {
  checkAuth() {
    return of({ isAuthenticated: false });
  }
  logoff() {
    return of({});
  }
}

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SidebarComponent,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        HttpClientTestingModule,
        NoopAnimationsModule,
        TranslateModule.forRoot(),
      ],
      providers: [
        { provide: BreakpointObserver, useClass: MockBreakpointObserver },
        { provide: OidcSecurityService, useClass: MockOidcSecurityService },
        { provide: Router, useClass: MockRouter },
        TranslateStore, // TranslateStore hinzugefügt
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);

    // Übersetzungssprache initialisieren
    translateService.setDefaultLang('en');
    translateService.use('en');
    fixture.detectChanges();
  });

  it('sollte die Komponente erstellen', () => {
    expect(component).toBeTruthy();
  });

  it('sollte den korrekten Titel anzeigen', () => {
    const toolbar = fixture.debugElement.query(By.css('mat-toolbar span'));
    expect(toolbar).toBeTruthy(); // Sicherstellen, dass das Toolbar-Element existiert
    expect(toolbar.nativeElement.textContent.trim()).toBe('BlogApp');
  });

  it('sollte die Sprache wechseln können', () => {
    component.currentLanguage = 'en';
    component.toggleLanguage();
    expect(component.currentLanguage).toBe('de');
    expect(translateService.currentLang).toBe('de');

    component.toggleLanguage();
    expect(component.currentLanguage).toBe('en');
    expect(translateService.currentLang).toBe('en');
  });

  it('sollte korrekt zur Blog-Erstellungsseite navigieren', () => {
    const router = TestBed.inject(Router);
    component.onCreateNewBlogClick();
    expect(router.navigate).toHaveBeenCalledWith(['/create-new-blog']);
  });

  it('sollte korrekt zur Blog-Übersichtsseite navigieren', () => {
    const router = TestBed.inject(Router);
    component.navigateBack();
    expect(router.navigate).toHaveBeenCalledWith(['/blogs']);
  });
});
