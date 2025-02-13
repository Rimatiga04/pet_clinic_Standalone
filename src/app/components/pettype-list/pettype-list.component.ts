import { Component } from '@angular/core';
import { PettypeAddComponent } from '../pettype-add/pettype-add.component';
import { PetType } from '../../models/pettype';
import { PetTypeService } from '../../services/pet-type.service';

@Component({
  selector: 'app-pettype-list',
  imports: [PettypeAddComponent],
  templateUrl: './pettype-list.component.html',
  styleUrl: './pettype-list.component.css'
})
export class PettypeListComponent {
  public tipos: PetType[];
  public is_insert: boolean;
  public pettypeEdit: PetType = <PetType>{};
  constructor(private peticion: PetTypeService) {
    this.tipos = [];
    this.is_insert = false;
  }

  ngOnInit() {
    this.peticion.getPetTypes().subscribe({
      next: datos => {
        console.log("Datos", datos);
        this.tipos = datos;
        console.log("tipos", this.tipos)
      },
      error: error => console.log(error)
    });
  }

  mostrarForm() {
    this.is_insert = !this.is_insert;
    if (this.is_insert) this.pettypeEdit = <PetType>{};
  }

  onNewPettype(res: any) {
    this.tipos.push(res);
    this.mostrarForm();
  }
}
