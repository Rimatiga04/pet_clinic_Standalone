import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Owner } from '../models/owner';
import { Pet } from '../models/pet';
import { environment } from '../../environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private url = environment.API_URL;
  constructor(private http: HttpClient) { }

  getOwners() {
    let cuerpo = {
      accion: "ListarOwners"
    }
    return this.http.post<Owner[]>(this.url, cuerpo);
  }

  insertOwners(owner: Owner) {
    let cuerpo = {
      accion: "AnadeOwner",
      owner: owner
    }
    return this.http.post<Owner[]>(this.url, cuerpo);
  }

  modOwner(owner: Owner) {
    let cuerpo = {
      accion: "ModificaOwner",
      owner: owner
    }
    return this.http.post<Owner[]>(this.url, cuerpo);
  }
  selOwner(id: number) {
    let cuerpo = {
      accion: "ObtenerOwnerId",
      id: id
    }
    return this.http.post<Owner>(this.url, cuerpo);
  }
}
