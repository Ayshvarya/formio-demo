import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilderComponent, FormioAlerts } from 'angular-formio';
import { ActivatedRoute } from '@angular/router';
import { FormManagerConfig } from '../interfaces/form-manager.config';
import _ from 'lodash';
import { FormServiceService } from '../services/form-service.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  @ViewChild(FormBuilderComponent) builder: FormBuilderComponent;
  @ViewChild('title') formTitle: ElementRef;
  @ViewChild('type') formType: ElementRef;
  public form: any;
  public options:any;
  public loading: Boolean;
  public formReady: Boolean;
  public editMode: Boolean;
  constructor(public route: ActivatedRoute,public config: FormManagerConfig,public alerts: FormioAlerts, public service: FormServiceService
    ) { 
    this.form = {
      components: [{
        key:'submit',
        disabled:true,
        input:true,
        type:'button'
      }]
    };

    this.options={
      builder:{
        resourceGroup: {
          title: 'Resources',
          weight: 0,
          default:true
        },
        basic:false,
        advanced:false,
        layout:false,
        data:false
      }
    }

    this.formReady = false;
    this.loading = false;
    this.editMode = false;
  }

  ngOnInit() {
    this.initBuilder();
   
  }

  initBuilder(){
    this.formReady = true;
  }

  ngAfterViewInit() {
    
  }
  onChange(event){
      event.builder.components = _.sortBy(event.builder.components, function(item) {
        return item.component.type === 'header' ? 0 : 1;
      });
  }
  saveForm() {
    this.loading = true;
    this.form.title = this.formTitle.nativeElement.value;
    this.form.display = this.formType.nativeElement.value;
    this.form.components = this.builder.formio.schema.components;
    this.form.type="resource";
    if (this.config.tag) {
      this.form.tags = this.form.tags || [];
      this.form.tags.push(this.config.tag);
      this.form.tags = _.uniq(this.form.tags);
    }
    if (!this.form._id) {
      this.form.name = _.camelCase(this.form.title).toLowerCase();
      this.form.path = this.form.name;
    }
    return this.service.saveResource(this.form).then(form=>{
        this.loading=false;
        this.form = {
          components: [{
            key:'submit',
            disabled:true,
            input:true,
            type:'button'
          }]
        };
        this.formTitle.nativeElement.value="";
        this.alerts.setAlert({type: 'success', message: "Resource saved successfully"});
        return this.form;
    }).catch(err=>{
          this.loading=false;
          this.alerts.setAlert({type: 'danger', message: (err.message || err)});
    });
    // return this.service.formio.saveForm(this.form).then(form => {
    //   this.form = this.service.setForm(form);
    //   this.loading = false;
    //   return this.form;
    // }).catch(err => {
    //   this.loading = false;
    //   // Catch if a form is returned as an error. This is a conflict.
    //   if (err._id && err.type) {
    //     throw err;
    //   }
    //   this.alerts.setAlert({type: 'danger', message: (err.message || err)});
    // });
  }


}
