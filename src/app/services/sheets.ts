import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const SHEETS_URL = environment.sheetsUrl;

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

/*
─── CÓMO CONECTAR CON GOOGLE SHEETS ──────────────────────────────────────────

1. Abrí Google Sheets → Extensiones → Apps Script
2. Pegá este código en el editor:

function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const { nombre, apellido, pais, telefono, email, timestamp } = e.parameter;
  sheet.appendRow([timestamp, nombre, apellido, pais, telefono, email]);
  return ContentService.createTextOutput('OK');
}

3. Hacé clic en "Implementar" → "Nueva implementación"
4. Tipo: "Aplicación web"
5. Ejecutar como: "Yo"
6. Quién tiene acceso: "Cualquier persona"
7. Copiá la URL que te da y pegala en SHEETS_URL arriba
──────────────────────────────────────────────────────────────────────────────
*/
