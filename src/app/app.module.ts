import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import {APP_BASE_HREF} from '@angular/common';



import { ProfessorGridComponent } from './professor-grid/professor-grid.component';
import { ProfessorDetailComponent } from './professor-detail/professor-detail.component';
import { MateriaGridComponent } from './materia-grid/materia-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessorGridComponent,
    ProfessorDetailComponent,
    MateriaGridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent]
})
export class AppModule { }
