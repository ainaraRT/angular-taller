import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images/images.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    ImagesComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule, //Empaquetado el carrousel
    FormsModule, //Los controles de formulario
    ReactiveFormsModule //Los controles de formulario
  ]
})
export class ComponentsModule { }
