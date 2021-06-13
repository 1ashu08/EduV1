import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponentComponent } from './chat-component/chat-component.component';



@NgModule({
  declarations: [ChatComponentComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ChatComponentComponent
  ]
})
export class ChatModule { }
