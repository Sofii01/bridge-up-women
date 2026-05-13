import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { TallerDetail } from './components/taller-detail/taller-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'taller/:id', component: TallerDetail },
  { path: '**', redirectTo: '' },
];
