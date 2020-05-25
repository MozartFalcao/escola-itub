import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProfessorDetailComponent } from './professor-detail/professor-detail.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  { path: '**', component: AppComponent },
  { path: 'professor-detail', component: ProfessorDetailComponent }





];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
