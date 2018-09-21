import { Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { NotFoundComponent } from "./notfound/notfound.component";
import { DataInputComponent } from "./data-input/data-input.component";
import { DeleteComponent } from "./delete/delete.component";
import { DetailComponent } from "./detail/detail.component";


export const appRoutes: Routes = [
    { path: '', component: ListComponent },
    { path: 'detail/:id', component: DetailComponent},
    { path: 'create', component: DataInputComponent },
    { path: 'update/:id',   component: DataInputComponent , pathMatch: 'full' },
    { path: 'delete/:id', component: DeleteComponent},
    { path: '**', component: NotFoundComponent }
  ];