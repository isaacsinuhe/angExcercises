import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router'

import { AppComponent } from '../app.component';
import { NavComponent } from '../components/nav/nav.component';
import { BarGraphComponent } from '../components/graph/bar-graph/bar-graph.component';
import { PieChartComponent } from '../components/graph/pie-chart/pie-chart.component';
import { LineGraphComponent } from '../components/graph/line-graph/line-graph.component';
import { SpreadsheetComponent } from '../components/spreadsheet/spreadsheet.component';
import { TextAreaComponent } from '../components/text-area/text-area.component';
import { ViewTaComponent } from '../components/view-ta/view-ta.component';
import { MultiContainerComponent } from '../components/multi-container/multi-container.component';
import { MultiStepComponentComponent } from '../components/multi-step-component/multi-step-component.component';
import { ImageGalleryComponent } from '../components/image-gallery/image-gallery.component';
import { NotesComponent } from '../components/notes/notes.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { HomeComponent } from '../components/home/home.component';
import { GraphComponent } from '../components/graph/graph.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'graphics', component: GraphComponent },
  { path: 'bar-graph', component: BarGraphComponent },
  { path: 'pie-chart', component: PieChartComponent },
  { path: 'line-graph', component: LineGraphComponent },
  { path: 'spreadsheet', component: SpreadsheetComponent },
  { path: 'textarea', component: ViewTaComponent },
  { path: 'multi-container', component: MultiContainerComponent },
  { path: 'image-gallery', component: ImageGalleryComponent },
  { path: 'notes', component: NotesComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
