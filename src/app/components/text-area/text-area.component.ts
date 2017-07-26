import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {
  @Input() public maxLength: number
  constructor() { }

  ngOnInit() {
  }
  a (e) {
    console.log(e);
  }
}
