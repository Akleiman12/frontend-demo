import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  public product: Product
  public productId: string

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) { }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      this.productId = res.id
    })
    this.product = await this.productService.getDetailed(this.productId)
    if(!this.product){
      this.router.navigate(['404'])
    }
  }

  public async onDelete(){
    this.productService.delete(this.productId).then(res => {
      alert("Product deleted successfully!")
      this.router.navigate([''])
    }).catch(err => {
      console.log(err)
      alert("Error while deleting product.")
    })
  }

  public onCancel(){
    this.router.navigate([''])
  }

}
