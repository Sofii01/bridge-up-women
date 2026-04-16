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
      answer: 'No pagás nada por adelantado. BridgeUp Women funciona con modelo ISA: empezás a pagar recién cuando conseguís trabajo, en cuotas accesibles durante 12 meses. Si no conseguís empleo, no pagás.',
      open: true,
    },
    {
      question: '¿Necesito experiencia previa?',
      answer: 'No. BridgeUp Women está diseñado para graduadas y estudiantes próximas a recibirse. Trabajamos desde cero para que puedas dar tu primer paso profesional con confianza.',
      open: false,
    },
    {
      question: '¿Solo es para carreras de sistemas o tecnología?',
      answer: 'Para nada. Nuestro programa está abierto a mujeres de todas las carreras. La employabilidad, el networking y la marca personal son habilidades transversales.',
      open: false,
    },
    {
      question: '¿Cómo son los talleres?',
      answer: 'Los talleres son online, en formato flexible: combinamos sesiones sincrónicas en vivo con contenido asincrónico que podés ver a tu ritmo. Cada taller dura entre 4 y 6 semanas.',
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
