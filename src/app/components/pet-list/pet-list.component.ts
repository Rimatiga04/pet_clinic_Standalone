import { Component, Input } from '@angular/core';
import { Pet } from '../../models/pet';
import { PetService } from '../../services/pet.service';
import { DatePipe } from '@angular/common';
import { VisitListComponent } from '../visit-list/visit-list.component';
@Component({
  selector: 'app-pet-list',
  imports: [DatePipe, VisitListComponent],
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.css'
})
export class PetListComponent {
  @Input() pet: Pet = <Pet>{};

  constructor(private peticion: PetService) {

  }

}
