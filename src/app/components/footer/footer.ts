import { Component } from '@angular/core';
import { PrivacyDrawer } from '../privacy-drawer/privacy-drawer';

@Component({
  selector: 'app-footer',
  imports: [PrivacyDrawer],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  privacyOpen = false;

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
