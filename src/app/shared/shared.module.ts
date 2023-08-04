import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [ErrorMessageComponent, InputComponent],
  imports: [CommonModule, FormsModule],
  exports: [ErrorMessageComponent, InputComponent],
})
export class SharedModule {}
