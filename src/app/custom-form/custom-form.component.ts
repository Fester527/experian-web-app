import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormTemplate } from '../custom-form-template';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {

  maritalStatuses: string[] = ['Married', 'Single', 'Unknown'];
  startDefault: Date;
  start: Date = new Date('2018-09-01T04:00:00.000Z');
  endDefault: Date;
  end: Date = new Date('2018-09-30T04:00:00.000Z');
  incomeDefault: boolean[] = [false, false, false, false, false, false, false, false, false, false, false, false, false];
  ageDefault: boolean[] = [false, false, false, false, false];
  income: boolean[] = [false, false, false, false, false, true, false, false, false, false, false, false, false];
  age: boolean[] = [true, false, false, false, false];

  

  constructor() { }

  ngOnInit() {
  }

  //model = new FormTemplate('Ness Earthbound', 'snes@nintendo.com', '12345678900', 30605, true, false, this.start, this.end, false, true, false, true, false, false, this.income, this.age);
  model = new FormTemplate('','','', null, false, false, this.startDefault, this.endDefault, false, false, false, false, false, false, this.incomeDefault, this.ageDefault);
  submitted = false;

  onSubmit() { 
    this.submitted = true;
    console.log(JSON.stringify(this.model));
  }

  newForm() {
    this.model = new FormTemplate('','','', null, false, false, this.startDefault, this.endDefault, false, false, false, false, false, false, this.incomeDefault, this.ageDefault);
  }

  diagnostic() { return JSON.stringify(this.model) }

}
