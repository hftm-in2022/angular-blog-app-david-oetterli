import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Verwendet HttpClientTestingModule statt HttpClientModule
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateService } from '@ngx-translate/core'; // Hinzugefügt
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateFakeLoader } from '@ngx-translate/core';
import { By } from '@angular/platform-browser';
import { BreakpointObserver } from '@angular/cdk/layout';
import { OidcSecurityService, StsConfigLoader } from 'angular-auth-oidc-client';
import { Observable, of } from 'rxjs';

class MockBreakpointObserver {
  observe(): Observable<{ matches: boolean }> {
    return of({ matches: false });
  }
}

class MockOidcSecurityService {
  checkAuth() {
    return of({ isAuthenticated: false });
  }
  getAccessToken(): Observable<string> {
    return of('');
  }
}

describe('SidebarComponent', () => {
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SidebarComponent,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        HttpClientTestingModule, // Ersetzt HttpClientModule
        NoopAnimationsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader, // Mock-Loader für Übersetzungen
          },
        }),
      ],
      providers: [
        { provide: BreakpointObserver, useClass: MockBreakpointObserver },
        { provide: OidcSecurityService, useClass: MockOidcSecurityService },
        { provide: StsConfigLoader, useValue: {} },
        TranslateService, // Übersetzungsdienst
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    fixture.detectChanges();
  });

  it('sollte den korrekten Titel anzeigen', () => {
    const toolbar = fixture.debugElement.query(By.css('mat-toolbar span'));
    expect(toolbar.nativeElement.textContent.trim()).toBe('BlogApp');
  });

  it('sollte den korrekten Titel anzeigen', () => {
    const toolbar = fixture.debugElement.query(By.css('mat-toolbar span'));
    expect(toolbar).toBeTruthy(); // Sicherstellen, dass das Element existiert
    if (toolbar) {
      expect(toolbar.nativeElement.textContent.trim()).toBe('BlogApp');
    }
  });
});
