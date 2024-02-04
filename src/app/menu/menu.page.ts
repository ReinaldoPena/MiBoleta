import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private storage: Storage
  ) { }

  ngOnInit() {
  }
  closeMenu(){
    console.log('cerrar Menu')
    this.menu.close();
    
  }
  logout(){
    this.storage.clear();
    this.navCtrl.navigateRoot("/login")
  }
  goToIntro(){
    console.log("go to intro");
    this.navCtrl.navigateBack('/intro');
    this.storage.set('mostreLaIntro', true);
  }
}
