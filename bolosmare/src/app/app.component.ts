import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'bolosmare';
  activeItem: MenuItem;
  items: MenuItem[];

  ngOnInit() {
    this.items = [
        {label: 'Ingredientes', icon: 'pi pi-fw pi-home'},
        {label: 'Receitas', icon: 'pi pi-fw pi-calendar'},
        {label: 'Vendas', icon: 'pi pi-fw pi-pencil'},
        {label: 'Gráficos', icon: 'pi pi-fw pi-file'}
    ];
  }

}
