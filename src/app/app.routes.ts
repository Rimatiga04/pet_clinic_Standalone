import { Routes } from '@angular/router';
import { OwnersComponent } from './components/owners/owners.component';
import { FormOwnerComponent } from './components/form-owner/form-owner.component';
import { DetailOwnerComponent } from './components/detail-owner/detail-owner.component';

export const routes: Routes = [
  {
    path: "",
    component: OwnersComponent
  },
  {
    path: "owner-add/:id",
    component: FormOwnerComponent
  },
  {
    path: "owner-detail/:id",
    component: DetailOwnerComponent
  }
];
