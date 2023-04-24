import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ProductDialogComponent } from '../dialogs/product-dialog/product-dialog.component';
import { ProductCreateDTO } from 'src/app/dto/productCreateDTO.model';
import { ProductDTO } from 'src/app/dto/productDTO.model';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit{

  productList: ProductDTO[] = [];
  
  constructor(public dialogService: DialogService, public productService: ProductService,
    private messageService: MessageService){

  }

  ngOnInit(): void {
    this.findAllProducts();
  }

  openProductDialog(id: number){
    
    let filteredProduct = this.productList.find(p => p.id == id);
    console.log(filteredProduct);
    let product =  filteredProduct != undefined ? filteredProduct : new Product();
    const ref = this.dialogService.open(ProductDialogComponent, {
      header: 'Receita',
      width: '70%',
      contentStyle: {'overflow' : 'visible'},
      data: {product: product}
    });

    ref.onClose.subscribe(data => {
      console.log(data);
      if(data != null){
        data.id == undefined ? this.createProduct(data) : this.updateProduct(data);
      }
    });
  }

  createProduct(productCreateDTO: ProductCreateDTO){
    console.log(productCreateDTO);
    this.productService.create(productCreateDTO).subscribe({
      next: data => {
        this.findAllProducts();
        this.messageService.add({key: 'bc', severity:'success', summary: 'Sucesso', detail: 'Receita adicionada!'});
      },error: err => {
        console.log(err);
      }
    })
  }

  updateProduct(productCreateDTO: ProductCreateDTO){
    
  }

  deleteProduct(id: number){
    this.productService.delete(id).subscribe({
      next: data => {
        this.findAllProducts();
        this.messageService.add({key: 'bc', severity:'success', summary: 'Sucesso', detail: 'Receita removida!'});
      }, error: err => {
        console.log(err);
      }
    })
  }

  findAllProducts(){
    this.productService.findAll().subscribe(data => {
      this.productList = data;
      console.log(this.productList);
    });
  }

}
