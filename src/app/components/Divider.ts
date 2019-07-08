import _ from 'lodash';
const BaseComponent = require('formiojs/components/base/Base').default;
const Components = require('formiojs/components/Components').default;
import baseEditForm from '../modals/Date.form';
export default class DividerComponent extends BaseComponent {
    type: string;
    dataValue: {};

    static schema() {
        return BaseComponent.schema({
          type: 'divider',
          label: 'Divider',
          key: 'divider',
          clearOnHide: true,
          input: true,
          components: [],
          hidelabel:true
        });
      }

      static get builderInfo() {
        return {
          title: 'Date',
          group: 'basic',
          icon: 'fa fa-calendar-plus-o',
          documentation: 'http://help.form.io/userguide/#datetime',
          weight: 0,
          schema: DividerComponent.schema(),
        };
      }

      constructor(component, options, data) {
        super(component, options, data);
        this.type = 'divider';
      }

      get defaultSchema() {
        return DividerComponent.schema();
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
        let elem =this.ce('hr', {
          id: "".concat(this.id, "-divider"),
          class: 'divider-container'
        });
        this.element.appendChild(elem);
       
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
DividerComponent.editForm=baseEditForm;
Components.addComponent('divider', DividerComponent);
Components.setComponent('divider',DividerComponent);
