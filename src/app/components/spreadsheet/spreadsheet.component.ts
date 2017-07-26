import { Component, OnInit, OnChanges } from '@angular/core';
import { ChartDataService } from '../../services/chart-data.service';
import { SalesData } from '../../types/sales-performance';

@Component({
  selector: 'app-spreadsheet',
  templateUrl: './spreadsheet.component.html',
  styleUrls: ['./spreadsheet.component.css']
})
export class SpreadsheetComponent {
  protected spreadsheet: SalesData = { cols: [], data: [] }

  constructor(private service: ChartDataService) {
    service.getGlobalSales().subscribe( v => {
      this.spreadsheet.cols = v.cols
      this.spreadsheet.data = v.data
    })
  }

  spreadsheetChange ({value, i, j}) {
    console.log('executing the server method / rest api to persist data,.,.,. kind of', value, i, j);
    this.spreadsheet.data[i][j] = value
  }

}
