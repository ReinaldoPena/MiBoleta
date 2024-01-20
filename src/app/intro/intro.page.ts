import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slides = [
    {
      title: "Bienvenidos a MiBoleta",
      description:"Hola, gracias por usar Mi Boleta, el lugar mas seguro para adquirir tus boletas para cualquier evento!",
      image: "../../assets/images/TicketLogo.png",
      help_text: "Desliza para continuar",
      class:"blue-title"
    },
    {
      title: "Carnaval De Barranquilla",
      description:"Adquiere ya tus boletas para palco del carnaval de barranquilla y disfruta de sus desfiles con las mejores vistas y atencion",
      image: "../../assets/images/logocarna2024.png",
      help_text: "Desliza para continuar",
      class:"blue-title"
    },
    {
      title: "Superliga de Colombia",
      description:"Disfruta la vuelta de la final de la Superliga de colombia 2024, Millonarios vs Junior este miercoles en el estadio El Campín de Bogotá",
      image: "../../assets/images/superliga.png",
      help_text: "Desliza para continuar",
      class:"blue-title"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
