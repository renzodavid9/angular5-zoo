import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'guardar-email',
  template: `
    <h4>{{title}}</h4>
    <input type="text" [(ngModel)]="emailContacto"/>
    <button (click)="guardarEmail()">guardarEmail</button>
  `
})
export class GuardarEmailComponent implements OnInit, DoCheck{
    title = 'Guardar email';
    emailContacto: string;
  
    ngOnInit(){
    }

    ngDoCheck(){
    }

    guardarEmail(){
        localStorage.setItem('emailContacto', this.emailContacto);
    }
}
