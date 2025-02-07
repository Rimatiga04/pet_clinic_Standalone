import { Component, Input } from '@angular/core';
import { Pet } from '../../models/pet';
import { PetType } from '../../models/pettype';
import { Owner } from '../../models/owner';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../../services/pet.service';
import { PetTypeService } from '../../services/pet-type.service';
import { OwnerService } from '../../services/owner.service';
@Component({
  selector: 'app-pet-add',
  imports: [],
  templateUrl: './pet-add.component.html',
  styleUrl: './pet-add.component.css'
})
export class PetAddComponent {
  pet: Pet;
  @Input() current_type: PetType;
  current_owner: Owner;
  pet_types: PetType[];


  accion: string;

  constructor(private route: ActivatedRoute, private ruta: Router,
    private servicioPet: PetService, private servicioPetType: PetTypeService, private servicioOwner: OwnerService) {
    this.pet = <Pet>{};
    this.current_owner = <Owner>{};
    this.current_type = <PetType>{}
    this.pet_types = [];
    this.pet.birthDate = new Date();
    this.accion = "Add";
  }

  ngOnInit() {
    this.servicioPetType.getPetTypes().subscribe({
      next: datos => this.pet_types = datos,
      error: error => console.log(error)
    });
  }
}
