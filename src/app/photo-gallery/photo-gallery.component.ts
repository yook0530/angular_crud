import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {

  photos:any;
  currentPhoto = null;
  currnetIndex = -1;
  title = '';
  // public show: boolean = false;

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.retrievePhotos();
  }

  retrievePhotos(){
    this.photoService.getAll()
      .subscribe(
        data => {
          this.photos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  setActivePhoto(photo, index) {
    this.currentPhoto = photo;
    this.currnetIndex = index;
  }

  handlePageChange(event) {
    this.page = event;
    this.retrievePhotos();
  }

  handlePageSizeChange(event) {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrievePhotos();
  }

}
