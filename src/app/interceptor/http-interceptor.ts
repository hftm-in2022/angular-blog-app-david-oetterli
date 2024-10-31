import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('HTTP Request:', {
    url: req.url,
    method: req.method,
    headers: req.headers,
    body: req.body,
  });

  return next(req);
};
