import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { MenubarDesignTokens } from '@primeng/themes/types/menubar';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenubarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pet_clinic_Standalone';
  menuOptions: MenuItem[] | undefined;
  ngOnInit() {
    this.menuOptions = [
      {
        label: 'Owners',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Todos',
            icon: 'pi pi-users',
            routerLink: '/'
          },
          {
            label: 'Añadir Owner',
            icon: 'pi pi-user-plus',
            routerLink: 'owner-add/:id'
          }
        ]
      },
      {
        label: 'Veterinarios',
        icon: 'pi pi-briefcase',
        items: [
          {
            label: 'Ver Todos',
            icon: 'pi pi-briefcase',
            routerLink: 'vets'
          },
          {
            label: 'Add Vet',
            icon: 'pi pi-plus-circle',
            routerLink: 'vets-add/:id'
          }
        ]
      },
      {
        label: 'Pet Types',
        icon: 'pi pi-heart',
        routerLink: 'petTypes'
      }
    ]
  }

}
