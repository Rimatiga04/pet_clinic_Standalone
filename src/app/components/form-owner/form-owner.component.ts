import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Owner } from '../../models/owner';
import { OwnerService } from '../../services/owner.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-owner',
  imports: [FormsModule],
  templateUrl: './form-owner.component.html',
  styleUrl: './form-owner.component.css'
})
export class FormOwnerComponent {
  public owner: Owner = <Owner>{};
  public textoBoton: string;

  constructor(private peticion: OwnerService, private ruta: Router, private router: ActivatedRoute) {
    this.owner.id = -1;
    this.textoBoton = "Añadir Owner";
    console.log("Llega");
  }
  ngOnInit() {
    const ownerId = this.router.snapshot.params["id"];
    console.log("Id", ownerId);
    if (ownerId == -1) {
      this.textoBoton = "Añadir Owner";
    }
    else {
      this.textoBoton = "Modificar Owner";
      this.peticion.selOwner(ownerId).subscribe({
        next: datos => {
          console.log(datos);
          this.owner = datos;
        },
        error: error => console.log("Error:", error)
      });
    }
  }
  onSubmit() {
    console.log("this.owner", this.owner);
    if (this.owner.id == -1) {
      this.peticion.insertOwners(this.owner).subscribe({
        next: datos => {
          this.ruta.navigate(["/"]);
        },
        error: error => console.log("Error: ", error)
      })
    }
    else {
      this.peticion.modOwner(this.owner).subscribe({
        next: datos => {
          console.log("Owner Modificado");
          this.ruta.navigate(["/owner-detail/" + this.owner.id]);
        }
      })
    }
  }
  cancelar() {
    const ownerId = this.router.snapshot.params["id"];
    if (ownerId == -1) {
      this.ruta.navigate(["/"]);
    }
    else {
      this.ruta.navigate(["/owner-detail/" + ownerId]);
    }
  }
}
