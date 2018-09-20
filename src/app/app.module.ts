import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import * as appRoutes from './app.router'

//service
import { ProductService } from '../services/product.service';
import { ListComponent } from './list/list.component';
import { DataInputComponent } from './data-input/data-input.component';
import { DetailComponent } from './detail/detail.component';
import { DeleteComponent } from './delete/delete.component';
import { NotFoundComponent } from './notfound/notfound.component'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DataInputComponent,
    DetailComponent,
    DeleteComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes.appRoutes
    )
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
