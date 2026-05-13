import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-talleres',
  imports: [CommonModule, RouterLink],
  templateUrl: './talleres.html',
  styleUrl: './talleres.scss',
})
export class Talleres {
  selectedTaller: number | null = null;

  get modalOpen() {
    return this.selectedTaller !== null;
  }

  openModal(id: number) {
    this.selectedTaller = id;
  }

  closeModal() {
    this.selectedTaller = null;
  }

  onOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.closeModal();
    }
  }
}
