import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'

import {HeaderComponent} from './components/header/header.component';
import {LoaderComponent} from './components/loader/loader.component';
import {ContainerComponent} from './components/container/container.component'


@NgModule({
  declarations: [
    HeaderComponent,
    LoaderComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FontAwesomeModule,

  ],
  exports: [
    HeaderComponent,
    LoaderComponent,
    ContainerComponent
  ],
  providers: [

  ]
})
export class CoreModule { }
