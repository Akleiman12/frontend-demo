import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css']
})
export class DataInputComponent implements OnInit {

  public ready: boolean;
  public product: Product;
  public productId: string;
  private path: string;
  private image: File;

  public formGroup: FormGroup;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) { }

  async ngOnInit() {
    this.ready = false
    this.activatedRoute.url.subscribe(res => {
      this.path = res[0].path;
      if(this.path == "update"){
        this.productId = res[1].path
      }

    })

    if( this.path == "create"){
      this.product = {
        name: '',
        inventory: 0,
        price: 0
      } as Product
    }else if(this.path == "update"){
      console.log(this.productId)
      this.product = await this.productService.getDetailed(this.productId)
      delete this.product._id
    }
    this.formGroup = new FormGroup({
      name: new FormControl(this.product.name),
      inventory: new FormControl(this.product.inventory),
      price: new FormControl(this.product.price),
      img: new FormControl('')
    })
  }

  public onFileChanged(data){
    this.image = data.target.files[0]
    console.log('change',this.image)
  }

  public async onSubmit(){

    if(this.image){
      let res = await this.productService.uploadImg(this.image)
      console.log('img', res)
      this.product.img = res.img
    }

    if(this.path == "create"){
      await this.productService.create(this.product)
      alert('Product created successfully!')
    }else if(this.path == "update"){
      await this.productService.edit(this.productId, this.product)
      alert('Product updated successfully!')
    }
    this.router.navigate([''])
  }

}
