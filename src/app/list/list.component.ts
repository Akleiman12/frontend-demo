import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public products: Product[]

  constructor(private productService: ProductService, private router: Router) { }

  async ngOnInit() {
    this.products = await this.productService.getAll()
  }

  public onCreate(){
    this.router.navigate(['create'])
  }

  public onEdit(prod: Product){
    this.router.navigate(['update',prod._id])
  }

  public onDelete(prod: Product){
    this.router.navigate(['delete',prod._id])
  }

  public details(prod: Product){
    this.router.navigate(['detail',prod._id])
  }

}
