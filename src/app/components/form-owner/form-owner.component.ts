import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Owner } from '../../models/owner';
import { OwnerService } from '../../services/owner.service';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-owner',
  imports: [FormsModule, RouterLink],
  templateUrl: './form-owner.component.html',
  styleUrl: './form-owner.component.css'
})
export class FormOwnerComponent {
  public owner: Owner = <Owner>{};
  public textoBoton: string;

  constructor(private peticion: OwnerService, private ruta: Router, private router: ActivatedRoute) {
    this.owner.id = -1;
    this.textoBoton = "Añadir Owner";
  }
  ngOninit() {
    const ownerId = this.router.snapshot.params["id"]
    if (ownerId == -1) {
      this.textoBoton = "Añadir Owner"
    }
    else {
      this.textoBoton = "Modificar Owner"
    }
  }
  onSubmit() {
    console.log("this.owner", this.owner);
    if (this.owner.id == -1) {
      this.peticion.insertOwners(this.owner).subscribe({
        next: datos => {
          this.ruta.navigate(["/"]);
        }
      })
    }
    else{
      
    }
  }
}
