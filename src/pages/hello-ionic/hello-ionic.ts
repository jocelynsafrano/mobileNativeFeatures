import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProduitsProvider } from '../../providers/produits/produits';
import { Camera, CameraOptions } from '@ionic-native/camera';
 
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  public produits:any;
  constructor(public navCtrl : NavController, public prod: ProduitsProvider, public camera: Camera) {
    this.produits = this.prod.getProduit();
  }

  takePic() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      saveToPhotoAlbum: true,
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }
}
