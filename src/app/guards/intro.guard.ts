import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {
  constructor(
    private router: Router,
    private storage: Storage
  ) { }

   async canActivate() {
    const mostreIntro = await this.storage.get('mostreLaIntro');
   if(mostreIntro){
    console.log(mostreIntro);
    console.log('Ya mostre la intro');
    return true;
   } else {
    console.log('No mostre intro')
    this.router.navigateByUrl('/intro');
    return false;
   }
    /*
    console.log('Entro al guard')
      this.router.navigateByUrl('/intro');
  return false;  
*/
}
  
}
