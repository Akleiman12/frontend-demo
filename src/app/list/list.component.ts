import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public products: Product[]

  constructor(private productService: ProductService) { }

  async ngOnInit() {
    this.products = await this.productService.getAll()
  }

  public onEdit(prod: Product){
    console.log('onedit', prod._id)
  }

  public onDelete(prod: Product){
    console.log('onDelete', prod._id)
  }

}
