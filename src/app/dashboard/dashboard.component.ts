
import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';
import {UserService} from '../user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  images: any[];
  imagesFound: boolean = false;

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
   // this.searching = true;
    return this._imageService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => console.log("Request Completed")
    )
  }


  ngOnInit() {
  }

}
