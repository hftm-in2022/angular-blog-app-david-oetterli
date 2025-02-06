import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

function hasRole(accessToken: string, role: string): boolean {
  const decodedToken = JSON.parse(atob(accessToken.split('.')[1]));
  const roles: string[] = decodedToken?.realm_access?.roles || [];
  return roles.includes(role);
}

export const isAuthenticatedGuard: CanActivateFn = () => {
  const oidcSecurityService = inject(OidcSecurityService);
  const router = inject(Router);

  return new Promise<boolean>((resolve) => {
    oidcSecurityService.checkAuth().subscribe(({ isAuthenticated }) => {
      // warum subscribe, man kann auch ein Observable zurückgeben
      if (!isAuthenticated) {
        router.navigate(['']);
        resolve(false);
      } else {
        oidcSecurityService.getAccessToken().subscribe((accessToken) => {
          // subscribe in subscribe vermeiden
          if (accessToken && hasRole(accessToken, 'user')) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      }
    });
  });
};
