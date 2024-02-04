import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { EventsService } from '../services/events.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  event_list: any;
  categories_list: any;
  category: any;
  constructor(
    private router: Router,
    private storage: Storage,
    private events: EventsService
    ) {}

   ionViewDidEnter(){
    this.events.getEvents().then(res =>{
      this.event_list = res;
      console.log("Events desde el server",this.event_list)
    }
      )
      this.events.getCategories().then(res =>{
        this.categories_list = res;
        console.log("Categories desde el server ", this.categories_list)
      }
      )
      this.events.getOneCategorie('1').then(res =>{
        this.category = res;
        console.log("Una Categoria", this.category)
      }
      )
      
      console.log("Local Events",this.events.getLocalEvents().events);
    }
  goToIntro(){
    console.log("go to intro");
    this.router.navigateByUrl('/intro');
    this.storage.set('mostreLaIntro', true);
  }
}
