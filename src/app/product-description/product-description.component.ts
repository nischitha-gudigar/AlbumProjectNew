import { ProductService } from './../product.service';
import { Album } from './../album';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
 albumInfo? : Album;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getAlbumInfo(1).subscribe(responseData =>{ this.albumInfo=responseData});
    setTimeout(()=>{
      console.log(this.albumInfo)
    },1000)
  }

}
