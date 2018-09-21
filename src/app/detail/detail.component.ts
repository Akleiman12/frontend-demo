import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import * as environment from "../../environments/environment"

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private productId: string
  public product: Product
  public image: string

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.image = "../../assets/placeholder.jpg"
   }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      this.productId = res.id
    })
    console.log(this.productId)
    this.product = await this.productService.getDetailed(this.productId)
    if(this.product.img){
      this.image = environment.environment.api+this.product.img
    }
  }

  public onBack(){
    this.router.navigate([''])
  }

}
