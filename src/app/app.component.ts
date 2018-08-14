import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  kegs: Keg[] =[
    new Keg('Lager', 'Brooklyn Lager', 'Brooklyn Brewery', 6, '5.2%'),
    new Keg('IPA', 'Fremont IPA', 'FremontBrewing Company', 5, '6,2%'),
    new Keg('Bavarian Bright Lager', 'Hello, World!','Optimism Brewing', 6, '5.3%'),
  ]
  sellPint(keg){
    keg.pints--;
    console.log(keg.pints)
  }
  selectedKeg = null;
  editKeg(clickedKeg){
    this.selectedKeg = clickedKeg;
  }
  finishedEditing(){
    this.selectedKeg = null;
  }
}
