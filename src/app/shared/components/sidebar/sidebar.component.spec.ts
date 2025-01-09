import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'; // Hinzugefügt
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
  // let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SidebarComponent,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        HttpClientModule,
        NoopAnimationsModule, // Hinzugefügt
      ],
      providers: [
        { provide: BreakpointObserver, useClass: MockBreakpointObserver },
        { provide: OidcSecurityService, useClass: MockOidcSecurityService },
        { provide: StsConfigLoader, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    // component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('sollte den korrekten Titel anzeigen', () => {
    const toolbar = fixture.debugElement.query(By.css('mat-toolbar span'));
    expect(toolbar.nativeElement.textContent.trim()).toBe('BlogApp');
  });
});
