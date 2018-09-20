import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  p

  constructor(private pService: ProductService){
    
    
    
  }

  async ngOnInit(){
    this.p = await this.pService.getAll()
    console.log('en componente',this.p)
  }
}
