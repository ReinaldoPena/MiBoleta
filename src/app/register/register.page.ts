import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
 registerForm: FormGroup;
 //crear mensaje de validacion
 //crear mensaje de registro 
 constructor(
    private formBuilder: FormBuilder,
        private navCtrl: NavController,
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
       )
    })
  }

  ngOnInit() {
  }
register(register_data: any){
  console.log(register_data);
}
}
