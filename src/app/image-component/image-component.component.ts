import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';
import {UserService} from '../user.service';
@Component({
  selector: 'app-image-component',
  templateUrl: './image-component.component.html',
  styleUrls: ['./image-component.component.css']
})
export class ImageComponentComponent implements OnInit {
	images: any[];
	imagesFound: boolean = false;
	searching: boolean = false;

	handleSuccess(data){
		this.imagesFound = true;
		this.images = data.hits;
		console.log(data.hits);
	}

	handleError(error){
		console.log(error);
	}
  constructor(private _imageService : ImagesService , private user:UserService) { }

  searchImages(query: string){
   this.searching = true;
    return this._imageService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => this.searching = false
    )
  }


  ngOnInit() {
  }

}
