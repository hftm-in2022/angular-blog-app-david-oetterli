import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  userName = signal<string | null>(null);
  isAuthenticated = signal<boolean>(false);
  constructor(
    private oidcSecureService: OidcSecurityService,
    private router: Router,
  ) {
    this.oidcSecureService.checkAuth().subscribe(({ isAuthenticated }) => {
      this.isAuthenticated.set(isAuthenticated);

      if (isAuthenticated) {
        this.oidcSecureService.userData$.subscribe((userData) => {
          this.userName.set(
            userData?.userData?.preferred_username || 'Unknown User',
          );
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
}
