import { Component, EventEmitter, Input, Output, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { InscripcionService } from '../../services/inscripcion';

@Component({
  selector: 'app-inscripcion-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './inscripcion-modal.html',
  styleUrl: './inscripcion-modal.scss',
})
export class InscripcionModal {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  @ViewChild('inscripcionForm') inscripcionForm!: NgForm;

  private inscripcion = inject(InscripcionService);

  form = {
    nombre: '',
    apellido: '',
    email: '',
    pais: '',
    carrera: '',
    situacion: '',
    edad: '',
  };

  status: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  close() {
    this.closed.emit();
  }

  onOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('inscripcion-overlay')) {
      this.close();
    }
  }

  async submit() {
    this.inscripcionForm.control.markAllAsTouched();
    if (this.inscripcionForm.invalid) return;

    this.status = 'loading';
    try {
      await this.inscripcion.submit(this.form);
      this.status = 'success';
    } catch {
      this.status = 'error';
    }
  }

  reset() {
    this.inscripcionForm?.resetForm();
    this.form = { nombre: '', apellido: '', email: '', pais: '', carrera: '', situacion: '', edad: '' };
    this.status = 'idle';
    this.close();
  }
}
