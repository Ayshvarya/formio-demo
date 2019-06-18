import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  public form: Object;
  public options:any;
  constructor() { 
    this.form = {
      components: []
    };

    this.options={
      builder:{
        resource: {
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
  }

  ngOnInit() {
    
   
  }


}
