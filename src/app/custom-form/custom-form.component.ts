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

  model = new FormTemplate('', '', '');

  submitted = false;

  onSubmit() { this.submitted = true }

  newForm() {
    this.model = new FormTemplate('','','');
  }

  get diagnostic() { return JSON.stringify(this.model) }

}
