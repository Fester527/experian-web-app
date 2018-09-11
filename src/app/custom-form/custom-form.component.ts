import { Component, OnInit } from '@angular/core';
import { FormTemplate } from '../custom-form-template';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {

  maritalStatuses: string[] = ['Married', 'Single', 'Unknown'];

  constructor() { }

  ngOnInit() {
  }

  model = new FormTemplate('Ness Earthbound', 'snes@nintendo.com', '12345678900', 30605, false, false, null, null, false, false, false, false, false, false);

  submitted = false;

  onSubmit() { 
    this.submitted = true;
    console.log(JSON.stringify(this.model));
  }

  newForm() {
    this.model = new FormTemplate('','','', null, false, false, null, null, false, false, false, false, false, false);
  }

  diagnostic() { return JSON.stringify(this.model) }

}
