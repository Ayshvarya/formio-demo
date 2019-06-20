import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { FormServiceService } from '../services/form-service.service';
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  public form: Object;
  public options:any;
  constructor(public service: FormServiceService) { 
    this.form = {
      components: []
    };

    this.options={
      builder:{
        resources: {
          title: 'Existing Resources',
          components: {
          
              res1:{
                title:"resourcename",
                type:"form",
                components:[]
              }
          
           
          }
        }
      }
    }

  }

  ngOnInit() {
    
   
  }


}
