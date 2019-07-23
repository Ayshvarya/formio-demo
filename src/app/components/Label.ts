import _ from 'lodash';
const BaseComponent = require('formiojs/components/base/Base').default;
const Components = require('formiojs/components/Components').default;
import baseEditForm from '../modals/Date.form';
export default class LabelComponent extends BaseComponent {
    type: string;
    dataValue: {};

    static schema() {
        return BaseComponent.schema({
          type: 'label',
          label: 'Label',
          key: 'label',
          clearOnHide: true,
          input: true,
          components: [],
        });
      }

      static get builderInfo() {
        return {
          title: 'Label',
          group: 'basic',
          icon: 'fa fa-calendar-plus-o',
          documentation: 'http://help.form.io/userguide/#datetime',
          weight: 0,
          schema: LabelComponent.schema(),
        };
      }

      constructor(component, options, data) {
        super(component, options, data);
        this.type = 'label';
      }

      get defaultSchema() {
        return LabelComponent.schema();
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
        
       
        this.attachLogic();
      }


      isEmpty(value) {
        if (value && (value.toString() === 'Invalid Date')) {
          return true;
        }
        return super.isEmpty(value);
      }

      createWrapper() {
        return false;
      }
      
    
}
Components.addComponent('label', LabelComponent);
