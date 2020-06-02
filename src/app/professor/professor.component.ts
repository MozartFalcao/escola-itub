import { Component, OnInit, TemplateRef } from '@angular/core';
import { ItubDBService } from '../_service/itubDB.service';
import { Professor } from '../_models/professor';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  professoresLst: any = [];

  modalRef: BsModalRef;
  config = {
    keyboard: true
  };

  constructor(private atService: ItubDBService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getProfessores();

  }

  getProfessores() {
    this.atService.getProfessores().subscribe
      (
        (response) => {
          this.professoresLst = response;
        },
        (error) => console.log(error)
      );
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

}
