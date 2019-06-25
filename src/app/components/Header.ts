import _ from 'lodash';
const NestedComponent = require('formiojs/components/nested/NestedComponent').default;
const BaseComponent = require('formiojs/components/base/Base').default;
const Components = require('formiojs/components/Components').default;
export default class HeaderComponent extends NestedComponent {
    type: string;
    dataValue: {};

    static schema() {
        return NestedComponent.schema({
          label: 'Header',
          type: 'header',
          key: 'header',
          clearOnHide: true,
          input: true,
          tree: true,
          components: []
        });
      }

      static get builderInfo() {
        return {
          title: 'Header',
          icon: 'fa fa-header',
          group: 'resourceGroup',
          documentation: 'http://help.form.io/userguide/#container',
          weight: 10,
          schema: HeaderComponent.schema()
        };
      }

      constructor(component, options, data) {
        super(component, options, data);
        this.type = 'container';
      }

      get defaultSchema() {
        return HeaderComponent.schema();
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
        this.addComponents(this.getContainer(), this.dataValue, null, state);
        if (labelAtTheBottom) {
          this.createLabel(this.element);
        }
        this.attachLogic();
      }

      get emptyValue() {
        return {};
      }

      hasChanged(before, after) {
        return !_.isEqual(before, after);
      }
    
      getValue() {
        return this.dataValue;
      }
    
      updateValue(flags, value) {
        // Intentionally skip over nested component updateValue method to keep recursive update from occurring with sub components.
        return BaseComponent.prototype.updateValue.call(this, flags, value);
      }

      setValue(value, flags) {
        flags = this.getFlags.apply(this, arguments);
        if (!value || !_.isObject(value)) {
          return;
        }
        const hasValue = this.hasValue();
        if (hasValue && _.isEmpty(this.dataValue)) {
          flags.noValidate = true;
        }
        if (!hasValue) {
          // Set the data value and then reset each component to use the new data object.
          this.dataValue = {};
          this.getComponents().forEach(component => (component.data = this.dataValue));
        }
        return super.setValue(value, flags);
      }
    
}
Components.addComponent('header', HeaderComponent);
