import { TestBed } from '@angular/core/testing';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('SidebarComponent', () => {
  let mockOidcSecurityService: Partial<OidcSecurityService>;
  let mockBreakpointObserver: Partial<BreakpointObserver>;
  let mockRouter: Partial<Router>;

  beforeEach(async () => {
    // Mock des OidcSecurityService
    mockOidcSecurityService = {
      checkAuth: jasmine
        .createSpy('checkAuth')
        .and.returnValue(of({ isAuthenticated: true })),
      userData$: of({ userData: { preferred_username: 'testuser' } }),
      authorize: jasmine.createSpy('authorize'),
      logoff: jasmine.createSpy('logoff').and.returnValue(of(true)),
    };

    // Mock des BreakpointObserver
    mockBreakpointObserver = {
      observe: jasmine
        .createSpy('observe')
        .and.returnValue(of({ matches: false })),
    };

    // Mock des Routers
    mockRouter = {
      navigate: jasmine.createSpy('navigate'),
    };

    await TestBed.configureTestingModule({
      imports: [SidebarComponent], // Da es ein Standalone-Component ist, importieren wir es direkt
      providers: [
        { provide: OidcSecurityService, useValue: mockOidcSecurityService },
        { provide: BreakpointObserver, useValue: mockBreakpointObserver },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();
  });

  it('should create the sidebar component', () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should set userName when authenticated', () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    fixture.detectChanges();

    const component = fixture.componentInstance;
    expect(component.isAuthenticated()).toBeTrue();
    expect(component.userName()).toBe('testuser');
  });

  it('should call authorize on login', () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    const component = fixture.componentInstance;

    component.onLoginClick();
    expect(mockOidcSecurityService.authorize).toHaveBeenCalled();
  });

  it('should call logoff on logout', () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    const component = fixture.componentInstance;

    component.onLogoutClick();
    expect(mockOidcSecurityService.logoff).toHaveBeenCalled();
  });

  it('should navigate to create new blog', () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    const component = fixture.componentInstance;

    component.onCreateNewBlogClick();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/create-new-blog']);
  });

  it('should navigate back to blogs', () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    const component = fixture.componentInstance;

    component.navigateBack();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/blogs']);
  });
});
