import { Component } from '@angular/core';
import {TableauAuthoringViz} from 'tableau-embed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tableau-test';
  url = 'https://public.tableau.com/views/Superstore_24/Overview';
  loadTableau(){
    const viz = new TableauAuthoringViz();

    viz.src = this.url;
    viz.hideCloseButton = true;
    viz.toolbar = 'hidden';
    let element : HTMLElement | null = document.getElementById('tableauViz');
    if(element != null){
      element.appendChild(viz);
    }
  }
}
