import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerService } from '../../services/owner.service';
import { Router, RouterLink } from '@angular/router';
import { Owner } from '../../models/owner';

@Component({
  selector: 'app-owners',
  imports: [CommonModule, RouterLink],
  templateUrl: './owners.component.html',
  styleUrl: './owners.component.css'
})
export class OwnersComponent {
  public owners: Owner[] = [];
  constructor(private servicioOwners: OwnerService) {

  }
  ngOnInit() {
    this.servicioOwners.getOwners().subscribe({
      next: datos => {
        console.log("Datos Owners", datos);
        this.owners = datos;
        console.log(this.owners);
      },
      error: error => console.log("Error: ", error)
    })
  }
}
