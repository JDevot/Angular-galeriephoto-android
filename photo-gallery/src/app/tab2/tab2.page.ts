import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  photos = this.photoService.photos;
  constructor(public photoService: PhotoService) { }
  ngOnInit() {
    console.log(this.photos)
    this.photoService.loadSaved();
    console.log(this.photos)
  }
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
  

}
