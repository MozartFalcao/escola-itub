import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Professor } from '../_models/professor';

import professores from '../../db/professores.json';
import materias from '../../db/materias.json';
import { Observable, of } from 'rxjs';
import { Materia } from '../_models/materia';



@Injectable({
  providedIn: 'root'
})
export class ItubDBService {

  professoresLst: Professor[] = professores;
  materiasLst: Materia[] = materias;


  constructor() {
  }

  getProfessores(): Observable<Professor[]> {
    return of (this.professoresLst);
  }

  getMaterias(): Observable<Materia[]> {
    return of (this.materiasLst);
  }
}

