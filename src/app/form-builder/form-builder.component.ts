import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  public form: Object;
  constructor() { 
    this.form = {
      components: []
    };

  }

  ngOnInit() {
    
   
  }


}
