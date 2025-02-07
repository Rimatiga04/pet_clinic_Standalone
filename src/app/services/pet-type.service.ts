import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { PetType } from '../models/pettype';
@Injectable({
  providedIn: 'root'
})
export class PetTypeService {
  private url = environment.API_URL;
  constructor(private http: HttpClient) { }


  getPetTypes() {
    let cuerpo = {
      accion: "ListarPettypes"
    }
    return this.http.post<PetType[]>(this.url, cuerpo);
  }
}
