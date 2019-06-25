import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { FormServiceService } from '../services/form-service.service';
const allComponents=require('formiojs/components/Components');
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
            comp[component.type]={schema:component,title:component.label,icon:allComponents.default._components[component.type].builderInfo.icon};
        });
        obj[key.title]={title:key.title,components:comp};
    });
    this.options={
      builder:{
        resources: {
          title: 'Existing Resources',
          groups:obj
          // groups:{
          //   resource1:{
          //     title:"resource1",
          //     components:[
          //       {
          //         title:"header"
          //       },
          //       {
          //         title:"button"
          //       }
          //     ]
          //   },
          //   resource2:{
          //     title:"resource2"
          //   }
          // }
        }
      }
    }

  }

  ngOnInit() {
    
   
  }


}
