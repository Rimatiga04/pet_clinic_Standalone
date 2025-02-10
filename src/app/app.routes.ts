import { Routes } from '@angular/router';
import { OwnersComponent } from './components/owners/owners.component';
import { FormOwnerComponent } from './components/form-owner/form-owner.component';
import { DetailOwnerComponent } from './components/detail-owner/detail-owner.component';
import { VetsComponent } from './components/vets/vets.component';
import { VetAddComponent } from './components/vet-add/vet-add.component';
import { PettypeListComponent } from './components/pettype-list/pettype-list.component';

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
  },
  {
    path: "vets",
    component: VetsComponent
  },
  {
    path: "vets-add/:id",
    component: VetAddComponent
  },
  {
    path: "petTypes",
    component: PettypeListComponent
  }
];
