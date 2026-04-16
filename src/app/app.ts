import { Component, inject, AfterViewInit } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Talleres } from './components/talleres/talleres';
import { Comunidad } from './components/comunidad/comunidad';
import { Sobre } from './components/sobre/sobre';
import { Porque } from './components/porque/porque';
import { Faqs } from './components/faqs/faqs';
import { Rfi } from './components/rfi/rfi';
import { Footer } from './components/footer/footer';
import { ScrollAnimation } from './services/scroll-animation';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Talleres, Comunidad, Sobre, Porque, Faqs, Rfi, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  private scrollAnim = inject(ScrollAnimation);

  ngAfterViewInit() {
    this.scrollAnim.init();
  }
}
