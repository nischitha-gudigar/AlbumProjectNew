import { ProductService } from './../product.service';
import { Album } from './../album';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {
  albumInfo? : Album;
  constructor(private productService :ProductService) { }

  ngOnInit(): void {
    this.productService.getAlbumInfo(1).subscribe(responseData => this.albumInfo=responseData);
  }

}
