import { Component } from '@angular/core';
import { DATAS } from './list_data';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent {

  datas=DATAS;

  constructor(){
    console.log(this.datas)
  }
  
}
