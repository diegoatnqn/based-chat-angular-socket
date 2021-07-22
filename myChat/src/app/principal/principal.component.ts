import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DbService } from '../db.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  mimsg: FormControl = new FormControl();
  misMensajes: Array<Object> = [];
  
  constructor(public db: DbService) { }
  

  ngOnInit(): void {
  }

  chat() {
    const nuevo = {
      texto: this.mimsg.value
    };

    this.db.enviar(nuevo).subscribe((data) => {
      console.log(data);
      this.actualizar();
    });
    
  }
    actualizar() {
      this.db.obtener().subscribe((data) => {
        console.log(data);
        let recibido = data["mensajes"];
        this.misMensajes.push(recibido.pop().texto);
        });
    }

  clearChat() {
    this.misMensajes = [];
    this.db.vaciar().subscribe();
  }
}
