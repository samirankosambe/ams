import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router
            ){}
 
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
              return  this.authService.isAuthenticated()
                    .then(
                      (authenticated: boolean) => {
                        if(authenticated) {
                          return true;
                        }else {
                          return false
                        }
                      }
                    )
              }

}