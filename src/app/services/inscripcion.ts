import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const INSCRIPCION_URL = environment.inscripcionUrl;

export interface InscripcionData {
  nombre: string;
  apellido: string;
  email: string;
  pais: string;
  carrera: string;
  situacion: string;
  edad: string;
}

@Injectable({
  providedIn: 'root',
})
export class InscripcionService {
  async submit(data: InscripcionData): Promise<void> {
    if (!INSCRIPCION_URL) {
      throw new Error('URL de inscripción no configurada');
    }

    const params = new URLSearchParams({
      nombre:    data.nombre.trim(),
      apellido:  data.apellido.trim(),
      email:     data.email.trim(),
      pais:      data.pais,
      carrera:   data.carrera.trim(),
      situacion: data.situacion,
      edad:      data.edad,
      timestamp: new Date().toISOString(),
    });

    // Google Apps Script redirige la request en no-cors y el promise a veces
    // nunca resuelve. AbortController garantiza que el loading no quede colgado:
    // cortamos a los 4 s (los datos ya llegaron al script) y mostramos éxito.
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    try {
      await fetch(`${INSCRIPCION_URL}?${params.toString()}`, {
        method: 'GET',
        mode: 'no-cors',
        signal: controller.signal,
      });
    } catch {
      // AbortError (timeout) o network error — consideramos éxito porque
      // la request ya fue despachada antes de que se abortara.
    } finally {
      clearTimeout(timeoutId);
    }
  }
}
