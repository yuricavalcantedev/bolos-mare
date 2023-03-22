import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ItemDTO } from 'src/app/dto/itemDTO.model';

@Component({
  selector: 'app-item-dialog',
  templateUrl: './item-dialog.component.html',
  styleUrls: ['./item-dialog.component.css']
})
export class ItemDialogComponent implements OnInit {

  itemForm: FormGroup;
  supplyTypeValues: string[] = ['G', 'ML'];
  inputTypeGroup: string;

  constructor(private fb: FormBuilder, public dialogRef: DynamicDialogRef, public dialogConfig: DynamicDialogConfig){

  }

  ngOnInit(): void {
    
    let item = this.dialogConfig.data.item;
    console.log(item);
    this.itemForm = this.fb.group({
      inputName: [item.name, Validators.required],
      inputPrice: [item.price, Validators.required],
      inputQuantity: [item.quantity, Validators.required],
      inputType: [item.supplyType, Validators.required],
      colorPicker: [item.hexColor]
    });
  }

  onSubmit(formValue: any){
    
    let itemDto = this.adaptFormValueToItemDto(formValue);
    itemDto.id = this.dialogConfig.data.item.id;
    this.dialogRef.close(itemDto);
  }

  adaptFormValueToItemDto(formValue: any) : ItemDTO{
    
    let itemDto = new ItemDTO();
    itemDto.hexColor = formValue.colorPicker;
    itemDto.name = formValue.inputName;
    itemDto.price = formValue.inputPrice;
    itemDto.supplyType = formValue.inputType;
    itemDto.quantity = formValue.inputQuantity;
    return itemDto;

  }

}
