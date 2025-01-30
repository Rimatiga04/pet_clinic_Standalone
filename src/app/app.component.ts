import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OwnersComponent } from "./components/owners/owners.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OwnersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pet_clinic_Standalone';
}
