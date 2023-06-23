import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class VacunasService {

  constructor(private http:HttpClient) { }
  getVacunas(MascotaID: string) {
    let url = 'https://www.hostcatedral.com/api/appCatalogoLibro/public/getVacunasPorMascota/' + MascotaID;
    return this.http.get(url);
  }
}
