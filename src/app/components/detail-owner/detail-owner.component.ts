import { Component } from '@angular/core';
import { Owner } from '../../models/owner';
import { OwnerService } from '../../services/owner.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PetListComponent } from "../pet-list/pet-list.component";

@Component({
  selector: 'app-detail-owner',
  imports: [RouterLink, PetListComponent],
  templateUrl: './detail-owner.component.html',
  styleUrl: './detail-owner.component.css'
})
export class DetailOwnerComponent {
  public owner: Owner = <Owner>{};

  constructor(private peticion: OwnerService, private router: ActivatedRoute, private ruta: Router) {

  }

  ngOnInit() {
    const ownerId = this.router.snapshot.params["id"];
    this.peticion.selOwner(ownerId).subscribe({
      next: datos => {
        console.log(datos);
        this.owner = datos;
      },
      error: error => console.log("Error:", error)
    });
  }

  eliminarOwner() {
    if (confirm("Quieres borrar a: " + this.owner.firstName + " " + this.owner.lastName)) {
      this.peticion.delOwner(this.owner.id).subscribe({
        next: datos => {
          this.ruta.navigate(["/"]);
        },
        error: error => console.log("Error:", error)
      })
    }
  }
}
