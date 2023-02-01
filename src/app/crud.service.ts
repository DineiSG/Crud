import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroment'; /*não esqueça de incluir a url da api dentro desse modulo */
import { Observable } from 'rxjs';
import { Crud } from './interfaces/crud';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient){}

  getListaCrud():Observable<Crud[]>{
    const url =`${enviroment.crudApiUrl}(/*inserir endpoint aqui*/`
    return this.http.get<Crud[]>(url);

  }

  getCrud(id:number):Observable<Crud>{
    const url =`${enviroment.crudApiUrl}(/*inserir endpoint aqui*)/${id}`;
    return this.http.get<Crud>(url);
  }

  addCrud(crud:Crud):Observable<Crud>{
    const url =`${enviroment.crudApiUrl}(/*inserir endpoint aqui*)`;
    return this.http.post<Crud>(url, crud);
  }

  atualizaCrud(crud:Crud):Observable<Crud>{
    const url= `${enviroment.crudApiUrl}(/*inserir endpoint aqui*)`;
    return this.http.put<Crud>(url, crud);
  }

  deleteCrud(id:number):Observable<Crud>{
    const url=`${enviroment.crudApiUrl}(/*inserir endpoint aqui*)`
    return this.http.delete<Crud>(url);
  }

}
 