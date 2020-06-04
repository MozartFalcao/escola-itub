import { Component, OnInit, TemplateRef } from '@angular/core';
import { ItubDBService } from '../_service/itubDB.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FirebaseDBService } from '../_service/firebaseDB.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  professoresLst: any = [];
  professoresFire: any;

  loading = false;

  modalRef: BsModalRef;
  config = {
    keyboard: true
  };

  constructor(private atService: ItubDBService, private modalService: BsModalService, private fireService: FirebaseDBService) { }



  ngOnInit(): void {
    // this.getProfessores();
    this.getProfessoresFire();

  }

  // get from json
  getProfessores() {
    this.atService.getProfessores().subscribe
      (
        (response) => {
          this.professoresLst = response;
        },
        (error) => console.log(error)
      );
  }

  // get from firebase
  getProfessoresFire() {

    this.loading = true;
    this.fireService.getAllProfessores().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(profs => {
      this.professoresFire = profs;
      this.loading = false;
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

}
