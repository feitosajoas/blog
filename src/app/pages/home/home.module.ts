import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home.routes';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [IndexComponent, DetailComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class HomeModule {}
