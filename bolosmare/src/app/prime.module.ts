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
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {InputTextModule} from 'primeng/inputtext';
import {ColorPickerModule} from 'primeng/colorpicker';
import {InputNumberModule} from 'primeng/inputnumber';
import {AutoFocusModule} from 'primeng/autofocus';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputMaskModule} from 'primeng/inputmask';


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
    MessageModule,
    MessagesModule,
    ColorPickerModule,
    DynamicDialogModule,
    InputTextModule,
    InputNumberModule,
    RadioButtonModule,
    AutoFocusModule,
    InputMaskModule
  ]
})
export class PrimeModule { }
