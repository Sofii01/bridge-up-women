import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-drawer',
  imports: [CommonModule],
  templateUrl: './privacy-drawer.html',
  styleUrl: './privacy-drawer.scss',
})
export class PrivacyDrawer {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }

  onOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('privacy-overlay')) {
      this.close();
    }
  }
}
