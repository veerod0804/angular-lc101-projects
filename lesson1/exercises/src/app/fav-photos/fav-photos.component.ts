import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Three Cute Cat Photos';
  image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThB1EV-5xS89qizgKWxC4rKdJUunSx7mbvQQ&usqp=CAU';
  image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9qzyCbRL9arHCzHeHJ9FXQDEQbWJIuH2CEA&usqp=CAU';
  image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJZ4rmmCOQtaa8Td_568uoUH80GZD5iercA&usqp=CAU';

  constructor() { }

  ngOnInit() {
  }

}