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
      }

      get defaultSchema() {
        return CustomComponent.schema();
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
        let elem =this.ce('p', {
          id: "".concat(this.id, "-custom"),
          class: 'custom-container'
        }, this.text('Hi am a custom component'));
        this.element.appendChild(elem);
       
        this.createDescription(this.element);
        this.attachLogic();
      }
    
}
CustomComponent.editForm=baseEditForm;
Components.addComponent('customComp', CustomComponent);
