import { Component, OnInit } from '@angular/core';
import { ItubDBService } from '../_service/itubDB.service';

import { Professor } from '../_models/professor';
import { Materia } from '../_models/materia';


@Component({
  selector: 'app-professor-grid',
  templateUrl: './professor-grid.component.html',
  styleUrls: ['./professor-grid.component.css']
})
export class ProfessorGridComponent implements OnInit {

  professoresLst: any = [];


  constructor(private atService: ItubDBService) { }

  ngOnInit(): void {

    this.atService.getProfessores().subscribe
      (
        (response) => {
          this.professoresLst = response;
        },
        (error) => console.log(error)
      );






  }



}
