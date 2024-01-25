import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(credential: any){
   return new Promise((accept, reject) => {
    if(
      credential.email == 'reinaldo@gmail.com'
      ){
      accept('Login correcto');
    }else{
      reject('Login incorrecto');
    }
   });
  }
}
