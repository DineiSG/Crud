import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Crud } from '../interfaces/crud';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-pagina-um',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  @Input() crud: Crud = <Crud>{};
  @Output() outputCrud: EventEmitter<Crud>= new EventEmitter();

  onSubmit(){
    this.outputCrud.emit(this.crud);
  }
  constructor(private crudService:CrudService, private router: Router){}

  addCrud(crud:Crud){
    this.crudService.addCrud(crud);{
        () => {this.router.navigateByUrl('/sucesso-cad');}
        () => {return('Falha ao adicionar cadastro.'); };
    }  
  }
}
