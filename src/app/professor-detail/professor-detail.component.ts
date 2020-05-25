import { Component, OnInit, Input } from '@angular/core';
import { Professor } from '../_models/professor';
import { Materia } from '../_models/materia';
import { ItubDBService } from '../_service/itubDB.service';

@Component({
  selector: 'app-professor-detail',
  templateUrl: './professor-detail.component.html',
  styleUrls: ['./professor-detail.component.css']
})
export class ProfessorDetailComponent implements OnInit {

  professoresLst: any = [];

  arr: Materia[];

  constructor(private atService: ItubDBService) { }

  ngOnInit(): void {
    // this.getProfessores();

    // this.atService.getProfessores().subscribe(data => {
    //   this.professores.push(data);
    // });

    this.atService.getProfessores().subscribe
      (
        (response) => {
          this.professoresLst = response;
        },
        (error) => console.log(error)
      );

  }

}
