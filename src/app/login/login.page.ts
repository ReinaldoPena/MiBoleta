import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Storage } from '@ionic/storage-angular';
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
    
    ],
    password:[
      { type: "required", message: "La Contraseña es obligatoria"},
      { type: "pattern", message: "La Contraseña ingresado no es valida"},
      { type: "minLength", message: "La Contraseña debe tener minimo 8 caracteres"}
    ]
    
  }
  loginMessage: any;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private navController: NavController,
    private storage: Storage
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
       ),
       password: new FormControl(
        "",
        Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(
          '^[a-zA-Z0-9_.+-]+$'
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
    this.storage.set('userLoggedIn', true);
    
    this.navController.navigateForward('/menu/home');
  }).catch(err => {
    this.loginMessage = err;
  })
}
goToRegister() {
  this.navController.navigateBack('/register');
}
}
