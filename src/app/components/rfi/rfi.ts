import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Sheets } from '../../services/sheets';

@Component({
  selector: 'app-rfi',
  imports: [FormsModule, CommonModule],
  templateUrl: './rfi.html',
  styleUrl: './rfi.scss',
})
export class Rfi {
  private sheets = inject(Sheets);

  form = {
    nombre: '',
    apellido: '',
    pais: '',
    telefono: '',
    email: '',
  };

  status: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  async submit() {
    if (!this.form.nombre || !this.form.apellido || !this.form.email) return;
    this.status = 'loading';
    try {
      await this.sheets.submit(this.form);
      this.status = 'success';
      this.form = { nombre: '', apellido: '', pais: '', telefono: '', email: '' };
    } catch {
      this.status = 'error';
    }
  }
}
