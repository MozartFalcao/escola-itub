import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import {APP_BASE_HREF} from '@angular/common';
import { ModalModule } from 'node_modules/ngx-bootstrap/modal';



import { ProfessorGridComponent } from './professor-grid/professor-grid.component';
import { MateriaGridComponent } from './materia-grid/materia-grid.component';
import { ProfessorComponent } from './professor/professor.component';
import { MateriaComponent } from './materia/materia.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessorGridComponent,
    MateriaGridComponent,
    ProfessorComponent,
    MateriaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent]
})
export class AppModule { }
