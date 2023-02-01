import {NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EntradaComponent } from "./entrada/entrada.component";
import { LoginComponent } from "./login/login.component";
import { CrudComponent } from "./crud/crud.component";
import { SucessoCadComponent } from "./sucesso-cad/sucesso-cad.component";


const routes: Routes=[
    {path:'', component:EntradaComponent},
    {path:'crud', component:CrudComponent},
    {path:'sucesso-cad', component:SucessoCadComponent},
    {path:'login', component:LoginComponent}

]

@NgModule({
    declarations:[],
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{} 


