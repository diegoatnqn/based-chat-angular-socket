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
      console.log(data);
      this.alertChild.actualizar(data);
    });

    this.socketService.socket.on('current-users', (data: number) => {
      this.alertChild.numeroConectados(data);
    })
  }
  ngOnDestroy() {
    this.socketService.disconnect();
  }
  enviar(mensaje: any) {
    this.socketService.socket.emit('message', mensaje);
  }

  iniciar(datosUser: any) {
    var data = { name: datosUser, userId: this.socketService.socket.id };
    this.socketService.socket.emit('setSocketId', data);
    this.mostrarChat = !this.mostrarChat;
  }
}
