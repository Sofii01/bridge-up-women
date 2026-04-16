import { Injectable, OnDestroy } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollAnimation implements OnDestroy {
  private observer: IntersectionObserver | null = null;

  init() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    this.observeAll();
  }

  observeAll() {
    const targets = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    targets.forEach((el) => this.observer?.observe(el));
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
