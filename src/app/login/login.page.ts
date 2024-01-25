import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_messages={
    email:[
      { type: "required", message: "El Email es obligatorio"},
      { type: "pattern", message: "El Email ingresado no es valido"}
    
    ]
  }
  loginMessage: any;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private navController: NavController
    ) {
    this.loginForm = this.formBuilder.group({
       email: new FormControl(
        "",
        Validators.compose([
        Validators.required,
        Validators.pattern(
          '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'
        )
        ])
       )
    })
   }
  
  ngOnInit() {
  }
login(login_data: any){
  console.log(login_data);
  this.authService.loginUser(login_data).then(res =>{
    this.loginMessage= res;
    this.navController.navigateForward('/home');
  }).catch(err => {
    this.loginMessage = err;
  })
}
}
