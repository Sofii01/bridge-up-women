import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-faqs',
  imports: [CommonModule],
  templateUrl: './faqs.html',
  styleUrl: './faqs.scss',
})
export class Faqs {
  faqs: FaqItem[] = [
    {
      question: '¿Tengo que pagar para sumarme?',
      answer: 'No necesitás invertir nada hoy. El programa funciona con pago diferido: empezás a pagar una vez que finalizás tu formación. Lo dividimos en cuotas durante un año para que sea cómodo. Y si todavía estás en el proceso de búsqueda laboral, adaptamos el monto a un valor reducido para apoyarte hasta que consigas el puesto que buscás.',
      open: true,
    },
    {
      question: '¿Necesito experiencia previa?',
      answer: 'No. BridgeUp Women está diseñado para graduadas y estudiantes próximas a recibirse. Trabajamos desde cero para que puedas dar tu primer paso profesional con confianza.',
      open: false,
    },
    {
      question: '¿Solo es para carreras de sistemas o tecnología?',
      answer: 'Para nada. Nuestro programa está abierto a mujeres de todas las carreras. La empleabilidad, el networking y la marca personal son habilidades transversales.',
      open: false,
    },
    {
      question: '¿Cómo son los talleres?',
      answer: 'Los talleres son online, en formato flexible: combinamos sesiones sincrónicas en vivo con contenido asincrónico que podés ver a tu ritmo. Cada taller dura entre 2 y 3 sesiones.',
      open: false,
    },
    {
      question: '¿Cómo son los Cursos?',
      answer: 'Los cursos son online, en formato flexible: combinamos sesiones sincrónicas en vivo con contenido asincrónico que podés ver a tu ritmo. Cada curso dura entre 3 y 6 meses.',
      open: false,
    },
    {
      question: '¿Qué pasa después del taller?',
      answer: 'Seguís siendo parte de la comunidad. Tenés acceso a la red de alumni, oportunidades laborales de nuestras empresas aliadas y sesiones de mentoría continua.',
      open: false,
    },
    {
      question: '¿En qué ciudades están disponibles?',
      answer: 'El programa es 100% online, por lo que podés participar desde cualquier ciudad de Latinoamérica.',
      open: false,
    },
  ];

  toggle(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
