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
    let obj={};
    _.each(this.service.resources,(key,val)=>{
        let comp={};
        _.each(key.components,(component)=>{
            comp[component.type]={schema:component,title:component.label};
        });
        obj[key.title]={title:key.title,components:comp};
    });
    console.log(obj);

    this.options={
      builder:{
        resources: {
          title: 'Existing Resources',
          groups:obj
        }
      }
    }

  }

  ngOnInit() {
    
   
  }


}
