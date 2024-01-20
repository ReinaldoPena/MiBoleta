import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slides = [
    {
      title: "Bienvenido1",
      description:"esta pagina es la 1",
      image: "../../assets/images/1.jpg",
      help_text: "Desliza para continuar",
      class:"red-title"
    },
    {
      title: "Bienvenido2",
      description:"esta pagina es la 2",
      image: "../../assets/images/1.jpg",
      help_text: "Desliza para continuar",
      class:""
    },
    {
      title: "Bienvenido3",
      description:"esta pagina es la 3",
      image: "../../assets/images/1.jpg",
      help_text: "Desliza para continuar",
      class:""
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
