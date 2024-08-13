import { Component, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent implements AfterViewInit {
  ngAfterViewInit() {
    
    const options = {

      strings: [
        'FreeLancer Fullstack',
        'Software Developer',
        'Future technologist'
      ],

      typeSpeed: 50, // velocidade da digitação
      backSpeed: 50, // velocidade da exclusão
      loop: true // se deve repetir o texto indefinidamente

    };

    const typed = new Typed('.description', options);
  }

  scrollToSection() {
    const element = document.getElementById('destino');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
