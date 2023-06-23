import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  constructor(private http:HttpClient) { }
  getClientes() {
    let url = 'https://www.hostcatedral.com/api/appCatalogoLibro/public/getClientes';
    return this.http.get(url);
  }
}
