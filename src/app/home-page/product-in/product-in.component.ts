import { Component, OnInit } from '@angular/core';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-product-in',
  templateUrl: './product-in.component.html',
  styleUrls: ['./product-in.component.css']
})

export class ProductInComponent implements OnInit {

  constructor() { }

  public tableData1: TableData;

  ngOnInit() {
      this.tableData1 = {
          headerRow: [ '#', 'Name', 'Job Position', 'Since', 'Salary', 'Actions'],
          dataRows: [
              ['1', 'Andrew Mike', 'Develop', '2013', '99,225',''],
              ['2', 'John Doe', 'Design', '2012', '89,241', ''],
              ['3', 'Alex Mike', 'Design', '2010', '92,144', ''],
              ['4','Mike Monday', 'Marketing', '2013', '49,990', ''],
              ['5', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
              ['1', 'Andrew Mike', 'Develop', '2013', '99,225',''],
              ['2', 'John Doe', 'Design', '2012', '89,241', ''],
              ['3', 'Alex Mike', 'Design', '2010', '92,144', ''],
              ['4','Mike Monday', 'Marketing', '2013', '49,990', ''],
              ['5', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
              ['1', 'Andrew Mike', 'Develop', '2013', '99,225',''],
              ['2', 'John Doe', 'Design', '2012', '89,241', ''],
              ['3', 'Alex Mike', 'Design', '2010', '92,144', ''],
              ['4','Mike Monday', 'Marketing', '2013', '49,990', ''],
              ['5', 'Paul Dickens', 'Communication', '2015', '69,201', '']
          ]
     };
 }

}
