import { Component, OnInit,Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewChecked, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit, AfterViewChecked{
  mimsg: FormControl = new FormControl(""); 
  misMensajes: Array<any> = [];
  @ViewChild('container')
    private myScrollContainer!: ElementRef;   //Elemento de HTML que asigno a variable

  @Output() miMensaje: EventEmitter<string> = new EventEmitter();   //declaro event emmiter que envia señal a padre
    personasConectadas: number=0;
  
  constructor() { }

  ngOnInit(): void {
    }

  chat() {
    this.miMensaje.emit(this.mimsg.value);  //envío el valor del mensaje de chat
    this.mimsg.reset("");
  }
  ngAfterViewChecked() {
    this.scrollToBottom();    //En cada cambio, mando para abajo el chat
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  actualizar(data: string) {
    this.misMensajes.push(data);
    
  }

  clearChat() {
    this.misMensajes = [];
  }
  numeroConectados(numeroActual:number) {
    this.personasConectadas = numeroActual;
  }
}
