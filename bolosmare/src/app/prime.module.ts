import { NgModule } from '@angular/core';
import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {ChipModule} from 'primeng/chip';
import {TagModule} from 'primeng/tag';
import {RippleModule} from 'primeng/ripple';
import {ColorPickerModule} from 'primeng/colorpicker';


@NgModule({
  exports: [
    TabViewModule,
    TableModule,
    ToastModule,
    AutoCompleteModule,
    ButtonModule,
    DialogModule,
    DynamicDialogModule,
    ChipModule,
    TagModule,
    RippleModule,
    ColorPickerModule
  ]
})
export class PrimeModule { }
