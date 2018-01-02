import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Importación modulos
import { ModuloEmailModule } from './moduloemail/moduloemail.module';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';

import { SimpleTinyComponent } from './components/simple-tiny/simple-tiny.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';
import { HomeComponent } from './components/home/home.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { ContactComponent } from './components/contact/contact.component';
import { AnimalsComponent } from './components/animals/animals.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleTinyComponent,
    TiendaComponent,
    ParquesComponent,
    HomeComponent,
    KeepersComponent,
    ContactComponent,
    AnimalsComponent
  ],
  imports: [
    BrowserModule,
    ModuloEmailModule,
    FormsModule,
    routing,
    AdminModule,
    BrowserAnimationsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }