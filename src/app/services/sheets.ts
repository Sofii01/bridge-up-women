import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const SHEETS_URL = environment.sheetsUrl;
console.log('SHEETS_URL:', SHEETS_URL);
export interface FormData {
  nombre: string;
  apellido: string;
  pais: string;
  telefono: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class Sheets {
  async submit(data: FormData): Promise<void> {
    const params = new URLSearchParams({
      nombre: data.nombre,
      apellido: data.apellido,
      pais: data.pais,
      telefono: data.telefono,
      email: data.email,
      timestamp: new Date().toISOString(),
    });

    // Usamos no-cors porque Apps Script no devuelve CORS headers correctos
    // La request igual llega al sheet aunque la respuesta sea opaca
    await fetch(`${SHEETS_URL}?${params.toString()}`, {
      method: 'GET',
      mode: 'no-cors',
    });
  }
}



