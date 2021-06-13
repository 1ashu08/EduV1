import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallComponentComponent } from './call-component/call-component.component';



@NgModule({
  declarations: [CallComponentComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CallComponentComponent
  ]
})
export class CallModule { }
