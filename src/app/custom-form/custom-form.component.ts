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

  model = new FormTemplate('', '', '', null, false, false, false);

  submitted = false;

  onSubmit() { 
    this.submitted = true;
    console.log(JSON.stringify(this.model));
  }

  newForm() {
    this.model = new FormTemplate('','','', null, false, false, false);
  }

  get diagnostic() { return JSON.stringify(this.model) }

}
