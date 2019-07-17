import _ from 'lodash';
const BaseComponent = require('formiojs/components/base/Base').default;
const NestedComponent=require('formiojs/components/nested/NestedComponent').default;
const Components = require('formiojs/components/Components').default;
import baseEditForm from '../modals/Date.form';
export default class CustomComponent extends NestedComponent {
    type: string;
    dataValue: {};

    static schema(...extend) {
        return BaseComponent.schema({
          type: 'customComp',
          label: 'Custom Block',
          key: 'customComp',
          clearOnHide: true,
          input: true,
          addAnother: 'Add Another',
          valueComponent: {
            type: 'textfield',
            api: 'value',
            defaultValue: 'Value',
            input: true
          },
         
        },...extend);
      }

      static get builderInfo() {
        return {
          title: 'Custom Block',
          documentation: 'http://help.form.io/userguide/#datetime',
          weight: 0,
          schema: CustomComponent.schema(),
        };
      }

      constructor(component, options, data) {
        super(component, options, data);
        this.type = 'customComp';
        this.rows={};
      }

      get defaultSchema() {
        return CustomComponent.schema();
      }

      get componentComponents() {
        return [this.component.valueComponent];
      }

      get emptyValue() {
        return '';
      }

      build(state) {
        this.createElement();
        const labelAtTheBottom = this.component.labelPosition === 'bottom';
        if (!labelAtTheBottom) {
          this.createLabel(this.element);
        }
        if (!this.hasValue()) {
          this.dataValue = {};
        }
        this.elem =this.ce('p', {
          id: "".concat(this.id, "-custom"),
          class: 'custom-container'
        }, this.text('Hi am a custom component'));

        this.buildRows(state);
        this.element.appendChild(this.elem);
       
        this.createDescription(this.element);
        this.attachLogic();
      }

      buildRows(state){
        if (this.options.builder) {
          return;
        }
        this.destroyComponents();
        _.each(this.rows, row => row.value.destroy());
        this.rows = {};
        this.empty(this.elem);
        const compRows = [];
        _.each(this.dataValue, (value, key) => compRows.push(this.buildRow(value, key, state)));
      }

      buildRow(value, key, state) {
        console.log(value,key,state);
      }

      setValue(value) {
        const changed = this.hasChanged(value, this.dataValue);
        this.dataValue = value;
        
        return changed;
      }
    
}
CustomComponent.editForm=baseEditForm;
Components.addComponent('customComp', CustomComponent);
