import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { TallerDetail } from './components/taller-detail/taller-detail';
import { PrivacyDrawer } from './components/privacy-drawer/privacy-drawer';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'privacy-policy', component: PrivacyDrawer },
  { path: 'taller/:id', component: TallerDetail },
  { path: '**', redirectTo: '' },
];
