import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ItemDTO } from 'src/app/dto/itemDTO.model';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';
import { ItemDialogComponent } from '../dialogs/item-dialog/item-dialog.component';

@Component({
  selector: 'app-item-management',
  templateUrl: './item-management.component.html',
  styleUrls: ['./item-management.component.css']
})
export class ItemManagementComponent implements OnInit{

  displayBasic: boolean = false;
  itemList: Item[] = [];
  cols: any[];

  constructor(public dialogService: DialogService, public itemService: ItemService,
    private messageService: MessageService){

  }

  ngOnInit() {
    this.findAllItems();
  }

  openItemDialog(id: number){
    
    let filteredItem = this.itemList.find(el => el.id == id);
    let item =  filteredItem != undefined ? filteredItem : new Item();
    console.log(item);
    const ref = this.dialogService.open(ItemDialogComponent, {
      header: 'Ingrediente',
      width: '70%',
      data: {item: item}
    });

    ref.onClose.subscribe(data => {
      if(data != null){
        data.id == undefined ? this.createItem(data) : this.updateItem(data);
      }
    });
  }

  createItem(itemDto : ItemDTO){
    this.itemService.create(itemDto).subscribe({
      next: data => {
        this.findAllItems();
        this.messageService.add({key: 'bc', severity:'success', summary: 'Sucesso', detail: 'Ingrediente adicionado!'});
      }, error: err => {
        console.log(err);
      }
    })
  }

  updateItem(itemDto: ItemDTO){
    this.itemService.update(itemDto.id, itemDto).subscribe({
      next: data => {
        this.findAllItems();
        this.messageService.add({key: 'bc', severity:'success', summary: 'Sucesso', detail: 'Ingrediente atualizado!'});
      }, error: err => {
        console.log(err);
      }
    })
  }

  deleteItem(id: number){
    this.itemService.delete(id).subscribe({
      next: data => {
        this.findAllItems();
        this.messageService.add({key: 'bc', severity:'success', summary: 'Sucesso', detail: 'Ingrediente removido!'});
      }, error: err => {
        console.log(err);
      }
    })
  }

  findAllItems(){
    this.itemService.findAll().subscribe(data => {
      this.itemList = data;
      console.log(data);
    });
  }

}
