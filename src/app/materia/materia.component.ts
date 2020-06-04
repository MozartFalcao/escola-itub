import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ItubDBService } from '../_service/itubDB.service';
import { FirebaseDBService } from '../_service/firebaseDB.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

  materiasLst: any = [];
  materiasFire: any;
  loading = false;


  modalRef: BsModalRef;
  config = {
    keyboard: true
  };

  constructor(public atService: ItubDBService, private modalService: BsModalService, private fireService: FirebaseDBService) { }

  ngOnInit(): void {

    // this.getMaterias();

    this.getMateriasFire();
  }

  // get from json
  getMaterias() {

    this.atService.getMaterias().subscribe
      (
        (response) => {
          this.materiasLst = response;
        },
        (error) => console.log(error)
      );
  }


  // get from firebase
  getMateriasFire() {

    this.loading = true;
    this.fireService.getAllMaterias().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(mats => {
      this.materiasFire = mats;
      this.loading = false;
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

}
