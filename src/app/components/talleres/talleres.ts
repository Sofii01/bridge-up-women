import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-talleres',
  imports: [CommonModule],
  templateUrl: './talleres.html',
  styleUrl: './talleres.scss',
})
export class Talleres {
  modalOpen = false;

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  onOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.closeModal();
    }
  }
}
