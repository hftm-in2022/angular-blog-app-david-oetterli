import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { switchMap } from 'rxjs/operators';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const oidcSecurityService = inject(OidcSecurityService);

  // Nur für POST-Anfragen an /entries
  if (req.method === 'POST' && req.url.includes('/entries')) {
    return oidcSecurityService.getAccessToken().pipe(
      switchMap((accessToken) => {
        if (accessToken) {
          // Klone die Anfrage und füge den Authorization-Header hinzu
          const authReq = req.clone({
            setHeaders: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          return next(authReq);
        } else {
          return next(req); // Anfrage ohne Token weitergeben
        }
      }),
    );
  }

  // Anfragen, die keinen Token benötigen, werden unverändert weitergegeben
  return next(req);
};
