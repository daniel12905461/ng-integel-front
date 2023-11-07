import { Component } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AlertSwallService } from 'src/app/core/service/alert-swall.service';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { CreateUsuariosComponent } from './create-usuarios/create-usuarios.component';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent {
  usuarios!: any[];
  modalOptions: NgbModalOptions = {};

  constructor(
    private modalService: NgbModal,
    private baseService: UsuariosService,
    public alertSwal: AlertSwallService
    ) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.baseService.getAll().subscribe(res => {
      this.usuarios = res.data;
    });
  }

  create(){
    const modalRef = this.modalService.open(
      CreateUsuariosComponent,
      this.modalOptions
    );
    modalRef.componentInstance.title = 'Crear Nuevo';
    modalRef.componentInstance.id = null;

    modalRef.result.then(result => {
      if (result) {
        this.list();
      }
    }).catch(error => {
      console.log('Error:', error);
    });
  }

  edit(id: any){
    const modalRef = this.modalService.open(
      CreateUsuariosComponent,
      this.modalOptions
    );
    modalRef.componentInstance.title = 'Editar';
    modalRef.componentInstance.id = id;

    modalRef.result.then(result => {
      if (result) {
        this.list();
      }
    });

  }

  eliminar(id: any){
    this.alertSwal
      .showConfirm({
        title: 'Esta seguro de eliminar?',
        text: 'la accion no podra revertirse...!',
        icon: 'warning'
      })
      .then(res => {
        // console.log(res);
        if (res.value === true) {
          this.baseService.delete(id).subscribe(
            (data: any) => {
              // console.log(res);
              this.alertSwal.showSwallSuccess(data.success);
              this.list();
            },
            (error: any) => this.alertSwal.showSwallError(error.error)
          );
        }
      });
  }

  enable(id: any) {
    this.baseService.enabled(id).subscribe(
      data => {
        this.list();
      },
      error => {
        // console.log('error ' + error);
        this.alertSwal.showSwallError(error.error);
        this.list();
      }
    );
  }

}
