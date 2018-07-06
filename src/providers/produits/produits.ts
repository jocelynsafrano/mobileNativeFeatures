import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProduitsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProduitsProvider {
  public produits:any = [];
  constructor(public http: HttpClient) {
    this.produits = this.getProduit();
  }

  getProduit() {
    return ["savon", "brosse", "dentifrice", "viande", "riz"];
  }

  delProduit(produit) {
    var index = this.produits.indexOf(produit);
    if (index > -1) {
      this.produits.splice(index, 1);
    }
  }
}
