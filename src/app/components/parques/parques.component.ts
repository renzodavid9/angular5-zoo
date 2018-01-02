import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'parques',
    templateUrl: './parques.component.html',
    styleUrls: ['./parques.component.css']
})
export class ParquesComponent{
    public nombre: string;
    public metros: number;
    public vegetacion: string;
    public abierto: boolean;

    @Input('nombreTienda') tiendaNombre: string;
    @Output() pasameLosDatos = new EventEmitter();

    constructor(){
        this.nombre = "Parque natural para caballos";
        this.metros = 450;
        this.vegetacion = "Alta";
        this.abierto = true;
    }

    emitirEvento(){
        console.log("hola")
        this.pasameLosDatos.emit({
            'nombre': this.nombre,
            'metros': this.metros,
            'vegetacion': this.vegetacion,
            'abierto': this.abierto
        });
        console.log("emitido...")
    }
}