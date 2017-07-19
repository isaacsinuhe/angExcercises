import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module'
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';

import { ChartDataService } from './services/chart-data.service';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BarGraphComponent } from './components/graph/bar-graph/bar-graph.component';
import { PieChartComponent } from './components/graph/pie-chart/pie-chart.component';
import { LineGraphComponent } from './components/graph/line-graph/line-graph.component';
import { SpreadsheetComponent } from './components/spreadsheet/spreadsheet.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { MultiStepComponentComponent } from './components/multi-step-component/multi-step-component.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { NotesComponent } from './components/notes/notes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { GraphComponent } from './components/graph/graph.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    BarGraphComponent,
    PieChartComponent,
    LineGraphComponent,
    SpreadsheetComponent,
    TextAreaComponent,
    MultiStepComponentComponent,
    ImageGalleryComponent,
    NotesComponent,
    PageNotFoundComponent,
    HomeComponent,
    GraphComponent,
  ],
  providers: [ ChartDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
