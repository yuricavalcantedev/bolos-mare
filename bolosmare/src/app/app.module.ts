import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ChartsManagementComponent } from './components/charts-management/charts-management.component';
import { ItemManagementComponent } from './components/item-management/item-management.component';
import { ProductManagementComponent } from './components/product-management/product-management.component';
import { OrderManagementComponent } from './components/order-management/order-management.component';
import { ItemDialogComponent } from './components/dialogs/item-dialog/item-dialog.component';
import { ProductDialogComponent } from './components/dialogs/product-dialog/product-dialog.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { PrimeModule } from './prime.module';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { ItemService } from './services/item.service';
import { ProductService } from './services/product.service';

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
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    PrimeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [DialogService, MessageService, ItemService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
