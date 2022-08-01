import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://www.instagram.com/','https://www.wikipedia.org/'];
  title = "Favorite Links";

  constructor() { }

  ngOnInit() {
  }

}
