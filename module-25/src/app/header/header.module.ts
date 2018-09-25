import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetModule } from '../widget/widget.module';
import { HeaderTopComponent } from './components/header-top/header-top.component';

@NgModule({
    imports: [
    CommonModule,
    WidgetModule
  ],
  declarations: [
      HeaderTopComponent,
  ],
  exports: [
    HeaderTopComponent,
    WidgetModule
  ]
})
export class HeaderModule { }
