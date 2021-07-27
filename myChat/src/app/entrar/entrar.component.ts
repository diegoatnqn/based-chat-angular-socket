import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {
  miuser: FormControl = new FormControl("");

  @Output() iniciar: EventEmitter<string> = new EventEmitter();
  
  constructor() {
  }

  ngOnInit(): void {
    
  }

  entrar() {
    this.iniciar.emit(this.miuser.value);
  }
}
