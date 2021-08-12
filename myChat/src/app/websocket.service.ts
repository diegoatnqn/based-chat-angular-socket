import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  socket!: Socket<DefaultEventsMap, DefaultEventsMap>;

  constructor() { }

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT, {
      withCredentials: true
    })
  }

  
  
  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
