import { EventEmitter, Output, Input, Component, OnInit, OnChanges, AfterContentInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-spread-grid',
  templateUrl: './spread-grid.component.html',
  styleUrls: ['./spread-grid.component.css']
})

export class SpreadGridComponent {
  @Input() data
  @Output() changesOfData = new EventEmitter()
  private detected: string

  constructor() {
    this.detected = 'Spreadsheet initialized'
  }
  
  changeData ({target: {value}}, i, j) {
    this.detected = `change detected at position [${i}][${j}], with value ${value} Persisting change in db...(mock)`
    this.changesOfData.emit({ value, i, j })
  }

  get rows () {
    const labels = this.data.cols,
      colNum = labels.length,
      data = this.data.data, rows = []
    let currentSubArray

    data.forEach((entry, dataIndex) => {
      entry.forEach((element, entryIndex) => {
        if (entryIndex % (colNum) === 0) {
          currentSubArray = []
          rows.push(currentSubArray)
        }
        currentSubArray.push(element)
      })
    })
    return rows
  }

}
