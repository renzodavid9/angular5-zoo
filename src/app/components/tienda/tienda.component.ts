import { Component, OnInit} from "@angular/core";
import { trigger, state, style, transition, animate } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
    selector: 'tienda',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css'],
    animations: [
        trigger('marcar', [
            state('inactive', style({
                border: '5px solid #ccc'
            })),
            state('active', style({
                border: '5px solid yellow',
                backgroundColor: 'red',
                borderRadius: '50px'
            })),
            transition('inactive => active', animate('300ms linear')),
            transition('active => inactive', animate('300ms linear'))
        ]),
        fadeIn
    ]
})
export class TiendaComponent implements OnInit{
    public titulo: string;
    public nombre: string;
    public status: string;

    constructor(){
        this.titulo = "Esta es la tienda";
        this.nombre = "nombre";
        this.status = 'inactive';
    }

    cambiarEstado(){
        if (this.status === 'inactive'){
            this.status = 'active';
        }else{
            this.status = 'inactive';
        }
    }

    ngOnInit(){
        $('#textojq').hide();
        $('#btnjq').click(function(){
            $('#textojq').slideToggle();
        });
    }

    verDatosParque(event){
        console.log(event);
    }

    textoRichEditor(content){
        console.log(content);
    }
}