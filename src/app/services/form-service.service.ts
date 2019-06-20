import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  public resources:any = [];
  constructor() { }

  saveResource(form){
    this.resources.push(form);
    return Promise.resolve(true);
  }
}
