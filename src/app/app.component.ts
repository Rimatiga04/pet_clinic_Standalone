import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { MenubarDesignTokens } from '@primeng/themes/types/menubar';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { SelectItemGroup } from 'primeng/api';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenubarModule, FormsModule, SelectModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pet_clinic_Standalone';
  menuOptions: MenuItem[] | undefined;
  groupedCities: SelectItemGroup[];

  selectedCity: string | undefined;

  constructor() {
    this.groupedCities = [
      {
        label: 'Germany',
        value: 'de',
        items: [
          { label: 'Berlin', value: 'Berlin' },
          { label: 'Frankfurt', value: 'Frankfurt' },
          { label: 'Hamburg', value: 'Hamburg' },
          { label: 'Munich', value: 'Munich' }
        ]
      },
      {
        label: 'USA',
        value: 'us',
        items: [
          { label: 'Chicago', value: 'Chicago' },
          { label: 'Los Angeles', value: 'Los Angeles' },
          { label: 'New York', value: 'New York' },
          { label: 'San Francisco', value: 'San Francisco' }
        ]
      },
      {
        label: 'Japan',
        value: 'jp',
        items: [
          { label: 'Kyoto', value: 'Kyoto' },
          { label: 'Osaka', value: 'Osaka' },
          { label: 'Tokyo', value: 'Tokyo' },
          { label: 'Yokohama', value: 'Yokohama' }
        ]
      }
    ];
  }
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
      },
      {
        label: 'Especialidades',
        icon: 'pi pi-slack',
        routerLink: 'specialty'
      },
      {
        label: 'Log Out',
        icon: 'pi pi-sign-out'
      }
    ]
  }

}
