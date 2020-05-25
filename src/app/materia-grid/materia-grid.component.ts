import { Component, OnInit } from '@angular/core';
import { ItubDBService } from '../_service/itubDB.service';

@Component({
  selector: 'app-materia-grid',
  templateUrl: './materia-grid.component.html',
  styleUrls: ['./materia-grid.component.css']
})
export class MateriaGridComponent implements OnInit {


  materiasLst: any = [];


  constructor(private atService: ItubDBService) { }

  ngOnInit(): void {

    this.atService.getMaterias().subscribe
      (
        (response) => {
          this.materiasLst = response;
        },
        (error) => console.log(error)
      );

  }
}
