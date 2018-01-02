import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'main-email',
  template: `
    <div class="panel panel-default">    
      <h2>{{title}}</h2>
      <hr/>
      <mostrar-email></mostrar-email>
      <guardar-email></guardar-email>
    </div>
  `
})
export class MainEmailComponent implements OnInit, DoCheck{
    title = 'Modulo email';
    ngOnInit(){
    }

    ngDoCheck(){
    }
}
