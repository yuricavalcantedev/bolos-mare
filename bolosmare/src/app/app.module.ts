import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChartsManagementComponent } from './components/charts-management/charts-management.component';
import { ItemManagementComponent } from './components/item-management/item-management.component';
import { ProductManagementComponent } from './components/product-management/product-management.component';
import { OrderManagementComponent } from './components/order-management/order-management.component';
import { ItemDialogComponent } from './components/dialogs/item-dialog/item-dialog.component';
import { ProductDialogComponent } from './components/dialogs/product-dialog/product-dialog.component';
import { AppRoutingModule } from './app-routing.module';

import { PrimeModule } from './prime.module';

@NgModule({
  declarations: [
    AppComponent,
    ChartsManagementComponent,
    ItemManagementComponent,
    ProductManagementComponent,
    OrderManagementComponent,
    ItemDialogComponent,
    ProductDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
