import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
 registerForm: FormGroup;
 validation_messages={
  email:[
    { type: "required", message: "El Email es obligatorio"},
    { type: "pattern", message: "El Email ingresado no es valido"}
  
  ],
  password:[
    { type: "required", message: "La Contraseña es obligatorio"},
    { type: "pattern", message: "La Contraseña ingresada no es valida"},
    { type: "minLength", message: "La Contraseña debe tener minimo 5 caracteres"}
  ],
  
    validPassword:[
      { type: "required", message: "Es obligatorio confirmar la contraseña"},
      { type: "pattern", message: "La contraseña ingresada no es valida"},
      { type: "minLength", message: "La Contraseña debe tener minimo 5 caracteres"}
    
    ],
    name:[
      { type: "required", message: "El nombre es obligatorio"},
      { type: "pattern", message: "El Nombre ingresado no es valido"},
    ],
    lastName:[
      { type: "required", message: "El es obligatorio"},
      { type: "pattern", message: "El Apellido ingresado no es valido"},
    ] 
}
registerMessage: any; 
 constructor(
    private formBuilder: FormBuilder,
        private navCtrl: NavController,
        private authService: AuthService,
    private storage: Storage

  ) { 
    this.registerForm = this.formBuilder.group({
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
       ),
       validPassword: new FormControl(
        "",
        Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(
          '^[a-zA-Z0-9_.+-]+$'
          )
        ])
       ),
       name: new FormControl(
        "",
        Validators.compose([
        Validators.required,
        Validators.pattern(
          '^[a-zA-Zñ-]+$'
          )
        ])
       ),
       lastName: new FormControl(
        "",
        Validators.compose([
        Validators.required,
        Validators.pattern(
          '^[a-zA-Zñ-]+$'
          )
        ])
       )
    })
  }

  ngOnInit() {
  }
register(register_data: any){
  console.log(register_data);
  this.authService.registerUser(register_data).then(res =>{
    this.registerMessage= res;
    this.storage.set('userLoggedUp', true);
    
    this.navCtrl.navigateForward('/login');
  }).catch(err => {
    this.registerMessage = err;
  })
}
goToLogin(){
  this.navCtrl.navigateBack("/login");
}
}
