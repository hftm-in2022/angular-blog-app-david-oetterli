import { Component, inject, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet,
    NgIf,
  ],
})
export class SidebarComponent {
  userName = signal<string | null>(null);
  isAuthenticated = signal<boolean>(false);
  private breakpointObserver = inject(BreakpointObserver);

  constructor(
    private oidcSecureService: OidcSecurityService,
    private router: Router,
  ) {
    this.oidcSecureService.checkAuth().subscribe(({ isAuthenticated }) => {
      this.isAuthenticated.set(isAuthenticated);

      if (isAuthenticated) {
        this.oidcSecureService.userData$.subscribe((userData) => {
          this.userName.set(userData?.userData?.preferred_username || '');
        });
      } else {
        this.userName.set(null);
      }
    });
  }

  onLoginClick() {
    this.oidcSecureService.authorize();
  }

  onLogoutClick() {
    this.oidcSecureService.logoff().subscribe((result) => console.log(result));
  }

  onCreateNewBlogClick() {
    this.router.navigate(['/create-new-blog']);
  }

  navigateBack() {
    this.router.navigate(['/blogs']);
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );
}
