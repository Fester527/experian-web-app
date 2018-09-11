import { Component, OnInit } from '@angular/core';
import { FormTemplate } from '../custom-form-template';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  model = new FormTemplate('Ness Earthbound', 'snes@nintendo.com', '18885552727', 30605, 'Single Family', null, null);

  submitted = false;

  onSubmit() { 
    this.submitted = true;
    console.log(JSON.stringify(this.model));
  }

  newForm() {
    this.model = new FormTemplate('','','', null, '', null, null);
  }

  get diagnostic() { return JSON.stringify(this.model) }

}
