import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Album } from './album';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private _http:HttpClient) { }
  getAllProducts():Observable<Product[]>{
    const productUrl = './assets/products.json';
    return this._http.get<Product[]>(productUrl);
  }

  getAlbumInfo(id:number):Observable<Album>{
    const AlbumInfoUrl = './assets/album.json';
    return this._http.get<Album>(AlbumInfoUrl);
  }
}
