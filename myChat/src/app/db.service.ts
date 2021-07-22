import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  url = 'https://087854d810ff.ngrok.io';
  myArray: Array<any> = [];
  constructor(public http: HttpClient) { }

  enviar(mensaje: any) {
    return this.http.post(this.url+'/mensaje',mensaje);
  }
  obtener() {
    return this.http.get<any>(this.url+'/mensaje/all');
  }
  vaciar() {
    return this.http.delete(this.url + '/mensaje/clear/all');
  }
}
