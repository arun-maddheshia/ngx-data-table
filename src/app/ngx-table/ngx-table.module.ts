import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { NgxTableComponent } from './ngx-table.component';
import { NgxTableRoutingModule } from './ngx-table.routing.module';

@NgModule({
  declarations: [NgxTableComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    NgxDatatableModule,
    NgxTableRoutingModule
  ]
})
export class NgxTableModule { }
