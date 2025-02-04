import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api_url } from '../../url';
@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  URL = api_url;
  constructor(private http: HttpClient) { }
  
  cargarFomulario(data: any) {
    return this.http.post(this.URL, data).subscribe((resp: any) => console.log(resp));
  }
}

