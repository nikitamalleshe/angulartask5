import { Component } from '@angular/core';
import { DATAS } from '../card3/list_data';


@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.css']
})
export class Card3Component {
  datas=DATAS;

  constructor(){
    console.log(this.datas)
  }
}
