import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PrincipalComponent } from './principal/principal.component';

import { WebsocketService } from './websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'socketio-angular';
  mensajeRecibido!: string;
  miMensaje: any;
  @ViewChild(PrincipalComponent, { static: false })
  alertChild: PrincipalComponent = new PrincipalComponent();
    mostrarChat: boolean;

  constructor(private socketService: WebsocketService) {
    this.mostrarChat = false;
  }

  ngOnInit() {
    this.socketService.setupSocketConnection();

    this.socketService.socket.on('my broadcast', (data: string) => {
      this.alertChild.actualizar(data);   //usu metodo de mi hijo "principalcomponent" y le paso lo que recibo
    });

    this.socketService.socket.on('current-users', (data: number) => {
      this.alertChild.numeroConectados(data); //usu metodo de mi hijo "principalcomponent" y le paso lo que recibo
    })
  }
  ngOnDestroy() {
    this.socketService.disconnect();
  }
  enviar(mensaje: any) {
    this.socketService.socket.emit('message', mensaje); //emito mensaje recibido a backend
  }

  iniciar(datosUser: any) {
    var data = { name: datosUser, userId: this.socketService.socket.id };
    this.socketService.socket.emit('setSocketId', data);    //Una vez puse el nombre, emito a backend
    this.mostrarChat = !this.mostrarChat;                   //Y muestro nombre
  }
}
