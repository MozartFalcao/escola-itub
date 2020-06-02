import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ItubDBService } from '../_service/itubDB.service';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

  materiasLst: any = [];

  modalRef: BsModalRef;
  config = {
    keyboard: true
  };

  constructor(public atService: ItubDBService, private modalService: BsModalService) { }

  ngOnInit(): void {

    this.getMaterias();

  }

  getMaterias() {

    this.atService.getMaterias().subscribe
      (
        (response) => {
          this.materiasLst = response;
          console.log(this.materiasLst);
        },
        (error) => console.log(error)
      );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

}
