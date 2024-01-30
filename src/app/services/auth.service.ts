import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(credential: any){
   return new Promise((accept, reject) => {
    if(
      credential.email == 'reinaldo@gmail.com' &&
      credential.password == '12345'
      ){
      accept('Login correcto');
    }else{
      reject('Login incorrecto');
    }
   });
  }
  registerUser(credential: any){
    return new Promise((accept, reject) => {
      if(
        credential.email != '' &&
        credential.password != '' &&
        credential.validPassword != '' &&
        credential.name != '' &&
        credential.lastName != ''
        ){
        accept('Registro correcto');
      }else{
        reject('Registro incorrecto');
      }
     });
  }
}
