import { Component, inject, AfterViewInit } from '@angular/core';
import { Hero } from '../hero/hero';
import { Talleres } from '../talleres/talleres';
import { Comunidad } from '../comunidad/comunidad';
import { Sobre } from '../sobre/sobre';
import { Porque } from '../porque/porque';
import { Faqs } from '../faqs/faqs';
import { Rfi } from '../rfi/rfi';
import { ScrollAnimation } from '../../services/scroll-animation';

@Component({
  selector: 'app-home',
  imports: [Hero, Talleres, Comunidad, Sobre, Porque, Faqs, Rfi],
  templateUrl: './home.html',
})
export class Home implements AfterViewInit {
  private scrollAnim = inject(ScrollAnimation);

  ngAfterViewInit() {
    this.scrollAnim.init();
  }
}
