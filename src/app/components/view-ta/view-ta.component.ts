import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-ta',
  templateUrl: './view-ta.component.html',
  styleUrls: ['./view-ta.component.css']
})
export class ViewTaComponent implements OnInit {
  private maxLenght: number
  constructor() {
    this.maxLenght = 8
  }

  ngOnInit() {
  }

}
