import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { InscripcionModal } from '../inscripcion-modal/inscripcion-modal';

@Component({
  selector: 'app-taller-detail',
  imports: [CommonModule, RouterLink, InscripcionModal],
  templateUrl: './taller-detail.html',
  styleUrl: './taller-detail.scss',
})
export class TallerDetail implements OnInit {
  private route = inject(ActivatedRoute);
  tallerId = 0;
  inscripcionOpen = false;

  ngOnInit() {
    this.tallerId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
