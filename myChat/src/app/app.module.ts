import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PrincipalComponent } from './principal/principal.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { WebsocketService } from './websocket.service';
import { EntrarComponent } from './entrar/entrar.component';
import { MatTooltipModule } from '@angular/material/tooltip';


//const config: SocketIoConfig = { url: 'http://localhost:4200', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    EntrarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatTooltipModule,
    //SocketIoModule.forRoot(config),
    ReactiveFormsModule
  ],
  providers: [WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
