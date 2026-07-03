import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy-drawer',
  imports: [CommonModule, RouterLink],
  templateUrl: './privacy-drawer.html',
  styleUrl: './privacy-drawer.scss',
})
export class PrivacyDrawer {}
