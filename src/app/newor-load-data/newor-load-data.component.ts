import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newor-load-data',
  templateUrl: './newor-load-data.component.html',
  styleUrls: ['./newor-load-data.component.css']
})
export class NeworLoadDataComponent implements OnInit {

  hfileList: Array<{
    FileName: string;
    Path: string
  }> = [];
  constructor() { }

  ngOnInit() {
  }

}
