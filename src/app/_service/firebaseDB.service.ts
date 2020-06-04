import { Injectable } from '@angular/core';
import { Professor } from '../_models/professor';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Materia } from '../_models/materia';


@Injectable({
  providedIn: 'root'
})
export class FirebaseDBService {

  private professoresPath = '/professores/professores';
  private materiasPath = '/materias/materias';

  professorRef: AngularFireList<Professor> = null;
  materiaRef: AngularFireList<Materia> = null;


  constructor(private db: AngularFireDatabase) {

    this.professorRef = db.list(this.professoresPath);
    this.materiaRef = db.list(this.materiasPath);

  }


  getAllProfessores(): AngularFireList<Professor> {
    return this.professorRef;
  }

  getAllMaterias(): AngularFireList<Materia> {
    return this.materiaRef;
  }

}
