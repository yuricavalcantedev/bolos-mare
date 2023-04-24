import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Dropdown } from 'primeng/dropdown';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ProductCreateDTO } from 'src/app/dto/productCreateDTO.model';
import { Item } from 'src/app/models/item.model';
import { ItemInProduct } from 'src/app/models/itemInProduct.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent implements OnInit{

  productForm: FormGroup;
  itemForm: FormGroup;
  inputTypeGroup: string;
  itemList: Item[] = [];
  selectedItem: Item;
  itemInProductList: ItemInProduct[] = [];

  @ViewChild('itemDropdown') itemDropdown: Dropdown;

  constructor(private fb: FormBuilder, public itemService: ItemService, 
    public dialogRef: DynamicDialogRef, public dialogConfig: DynamicDialogConfig,
    private messageService: MessageService){

  }

  ngOnInit(): void {

    let product = this.dialogConfig.data.product;
    this.productForm = this.fb.group({
      inputName: [product.name, Validators.required],
      inputPrice: [product.price, Validators.required]
    });

    this.itemForm = this.fb.group({
      itemQuantity: [''],
      itemPrice: ['']
    })
    
    this.selectedItem = new Item();
    this.itemInProductList = product.itemsList;
    this.findAllItems();

  }

  onDrodownChange(value: any){

    this.selectedItem = value;
    this.itemForm.controls['itemQuantity'].setValue(this.selectedItem.quantity);
    this.itemForm.controls['itemPrice'].setValue(this.selectedItem.price);
  }

  addItemInProductList(){

    let itemInProduct = new ItemInProduct();
    itemInProduct.item = this.selectedItem;
    itemInProduct.quantity = this.itemForm.controls['itemQuantity'].value;
    itemInProduct.price = this.itemForm.controls['itemPrice'].value;

    this.selectedItem = new Item();
    this.itemForm.controls['itemQuantity'].setValue('');
    this.itemForm.controls['itemPrice'].setValue('');
    this.itemDropdown.clear;

    
    this.itemInProductList.push(itemInProduct);
  }

  removeItemFromProductList(itemInProductSaveDTO : any){

    let index = this.itemInProductList.indexOf(itemInProductSaveDTO);
    this.itemInProductList.splice(index, 1);
    this.messageService.add({key: 'bc', severity:'success', summary: 'Sucesso', detail: 'Ingrediente removido!'});

  }

  onSubmit(){
  
    let productDTO = this.adaptFormValueToProductDTO(this.productForm.value);
    productDTO.itemsList = this.itemInProductList;
    this.dialogRef.close(productDTO);
  }

  findAllItems(){
    this.itemService.findAll().subscribe(data => {
      this.itemList = data;
      console.log(data);
      console.log(this.itemInProductList);
    });
  }

  adaptFormValueToProductDTO(formValue: any){
    
    let productDTO = new ProductCreateDTO();
    productDTO.name = formValue.inputName;
    productDTO.price = formValue.inputPrice;

    return productDTO;
  }
}
