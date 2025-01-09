// import { TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { AppComponent } from './app.component';
// import { Component } from '@angular/core';
// import { OidcSecurityService, StsConfigLoader } from 'angular-auth-oidc-client';
// import { of } from 'rxjs';
//
// // Mock für SidebarComponent
// @Component({
//   selector: 'app-sidebar',
//   template: '<div>Mock Sidebar</div>',
//   standalone: true,
// })
// class MockSidebarComponent {}
//
// // Mock für OidcSecurityService
// const mockOidcSecurityService = {
//   checkAuth: jasmine.createSpy('checkAuth').and.returnValue(of({ isAuthenticated: true })),
//   userData$: of({ userData: { preferred_username: 'testuser' } }),
//   authorize: jasmine.createSpy('authorize'),
//   logoff: jasmine.createSpy('logoff').and.returnValue(of(null)),
// };
//
// // Mock für StsConfigLoader
// class MockStsConfigLoader {
//   loadConfig() {
//     return Promise.resolve();
//   }
// }
//
// describe('AppComponent', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [RouterTestingModule, HttpClientTestingModule, AppComponent, MockSidebarComponent],
//       providers: [
//         { provide: OidcSecurityService, useValue: mockOidcSecurityService },
//         { provide: StsConfigLoader, useClass: MockStsConfigLoader },
//       ],
//     }).compileComponents();
//   });
//
//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy(); // Überprüft, ob die Komponente erfolgreich erstellt wurde
//   });
//
//   it(`should have the title 'BlogApp'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('BlogApp'); // Überprüft den Titel
//   });
//
//   it('should render the sidebar component', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges(); // Änderungserkennung erzwingen
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('app-sidebar')).toBeTruthy(); // Überprüft, ob die Sidebar-Komponente gerendert wird
//   });
// });
