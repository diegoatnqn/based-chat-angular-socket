import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  url = 'http://2680ed3c277f.ngrok.io';
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
